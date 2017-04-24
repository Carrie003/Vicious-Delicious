import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ActionSheetController,Platform,ToastController,LoadingController, Loading } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {MediaCapture,Camera,File, Transfer, FilePath} from 'ionic-native';
import { Recipes }from"../../providers/recipes"

/*
  Generated class for the Input page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var cordova: any;
@Component({
  selector: 'page-input',
  templateUrl: 'input.html'
  //providers:[Recipes]
})

export class InputPage {

  lastImage: string = null;
  loading: Loading;
  public base64Image: string;
  //public base64Video: string;

  img:any=null;
  title:any;
  subtitle1:any;
  subtitle2:any;
  ingredients:any;
  slides:any;



  ingredient1:any;
  ingredient2:any;
  ingredient3:any;
  ingredient4:any;
  ingredient5:any;
  ingredient6:any;
  ingredient7:any;
  ingredient8:any;
  ingredient9:any;
  ingredient10:any;


  description1:any;
  video1:any;

  description2:any;
  video2:any;

  description3:any;
  video3:any;

  description4:any;
  video4:any;

  description5:any;
  video5:any;

  description6:any;
  video6:any;

  description7:any;
  video7:any;

  description8:any;
  video8:any;

  description9:any;
  video9:any;

  description10:any;
  video10:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController,public platform: Platform,public toastCtrl: ToastController,public loadingCtrl: LoadingController,public recipeService:Recipes) {
    this.ingredient1=null;
    this.ingredient2=null;
    this.ingredient3=null;
    this.ingredient4=null;
    this.ingredient5=null;
    this.ingredient6=null;
    this.ingredient7=null;
    this.ingredient8=null;
    this.ingredient9=null;
    this.ingredient10=null;

    this.description1=null;
    this.description2=null;
    this.description3=null;
    this.description4=null;
    this.description5=null;
    this.description6=null;
    this.description7=null;
    this.description8=null;
    this.description9=null;
    this.description10=null;
  }



  save(): void {

    let ingredients=[this.ingredient1,this.ingredient2,this.ingredient3,this.ingredient4,this.ingredient5,this.ingredient6,this.ingredient7,this.ingredient8,this.ingredient9,this.ingredient10];

    for (let ingre of ingredients){
      if (ingre==null){
        ingredients=ingredients.slice(0,ingredients.indexOf(ingre));
        break;
      }
    }

    let slides=[ {
        title: "Step 1",
        description: this.description1,
        video: this.video1
      },{
        title: "Step 2",
        description: this.description2,
        video: this.video2
      },{
        title: "Step 3",
        description: this.description3,
        video: this.video3
      },{
        title: "Step 4",
        description: this.description4,
        video: this.video4
      },{
        title: "Step 5",
        description: this.description5,
        video: this.video5
      },{
        title: "Step 6",
        description: this.description6,
        video: this.video6
      },{
        title: "Step 7",
        description: this.description7,
        video: this.video7
      },{
        title: "Step 8",
        description: this.description8,
        video: this.video8
      },{
        title: "Step 9",
        description: this.description9,
        video: this.video9
      },{
        title: "Step 10",
        description: this.description10,
        video: this.video10
      }];

    for (let slide of slides){
      if (slide.description==null){
        slides=slides.slice(0,slides.indexOf(slide));
        break;
      }
    }

    // let lstgif=[this.video1,this.video2,this.video3,this.video4,this.video5,this.video6,this.video7,this.video8,this.video9,this.video10];
    //
    // for (let i=0;i<10;i++){
    //   if(lstgif[i]){
    //     slides[i].video=lstgif[i];
    //   }
    // }


    let recipe = {
      title: this.title,
      img: this.recipeService.link,
      subtitle1:this.subtitle1,
      subtitle2:this.subtitle2,
      ingredients:ingredients,
      slides:slides,
      token:"AllenJenniferTianyouXinyu"
    };

     if(this.img){
       recipe.img=this.img;
    }

    this.viewCtrl.dismiss(recipe);
  }

  close(): void {
    this.viewCtrl.dismiss();
  }


  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      destinationType: Camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    Camera.getPicture(options).then((imagePath) => {
      this.base64Image = imagePath;
      this.recipeService.imgurAPI(this.base64Image);
      //Special handling for Android library
      if (this.platform.is('android') && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
        FilePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
      this.presentToast('Uploading successful.');
    }, (err) => {
      this.presentToast('There is an error uploading the image.');
    });

  }

  // public presentVideoActionSheet() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Select Video Source',
  //     buttons: [
  //       {
  //         text: 'Load from Library',
  //         handler: () => {
  //           this.takeVideo(Camera.PictureSourceType.PHOTOLIBRARY);
  //         }
  //       },
  //       // {
  //       //   text: 'Use Camera',
  //       //   handler: () => {
  //       //     this.takeVideo(Camera.PictureSourceType.CAMERA);
  //       //   }
  //       // },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

   // public takeVideo(sourceType) {
   //  // Create options for the Camera Dialog
   //  var options = {
   //    quality: 100,
   //    sourceType: sourceType,
   //    mediaType:Camera.MediaType.VIDEO,
   //    destinationType: Camera.DestinationType.FILE_URI,
   //    saveToPhotoAlbum: false,
   //    correctOrientation: true
   //  };
   //
   //  // Get the data of an image
   //  Camera.getPicture(options).then((videoPath) => {
   //    videoPath="@"+videoPath.substr(7);
   //    //this.presentToast(videoPath);
   //    //Special handling for Android library
   //    // if (this.platform.is('android') && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
   //    //    FilePath.resolveNativePath(videoPath)
   //    //      .then(filePath => {
   //    //       let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
   //    //       let currentName = videoPath.substring(videoPath.lastIndexOf('/') + 1, videoPath.lastIndexOf('?'));
   //    //       this.copyFileToLocalDir(correctPath, currentName, this.createVideoName());
   //    //       //this.recipeService.giphyAPIUpload(correctPath);
   //    //     });
   //    // } else {
   //    //   var currentName = videoPath.substr(videoPath.lastIndexOf('/') + 1);
   //    //   var correctPath = videoPath.substr(0, videoPath.lastIndexOf('/') + 1);
   //    //   this.copyFileToLocalDir(correctPath, currentName, this.createVideoName());
   //    //   //this.recipeService.giphyAPIUpload(correctPath);
   //    //  }
   //    this.recipeService.giphyAPIUpload(videoPath);
   //    this.presentToast(this.recipeService.gifID);
   //    this.recipeService.giphyAPIget(this.recipeService.gifID);
   //    //this.presentToast('Uploading successful.');
   //  }, (err) => {
   //    this.presentToast('There is an error uploading the image.');
   //  });
   //
   // }

// Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName =  n + ".jpg";
    return newFileName;
  }
//
//   // Create a new name for the video
//   private createVideoName() {
//     var d = new Date(),
//       n = d.getTime(),
//       newFileName =  n + ".MOV";
//     return newFileName;
//   }

// Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    File.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
      this.presentToast('Successful.');
    }, error => {
      //this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

//Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  // public test(){
  //   let test="/Users/user/Vicious-Delicious/viciousDelicious/src/pages/input/2-0.mp4";
  //   this.recipeService.giphyAPIUpload(test);
  // }



}
