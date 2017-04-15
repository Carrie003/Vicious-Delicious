import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ActionSheetController,Platform,ToastController,LoadingController, Loading } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import {Camera,File, Transfer, FilePath} from 'ionic-native';

/*
  Generated class for the Input page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var cordova: any;
@Component({
  selector: 'page-input',
  templateUrl: 'input.html'
})

export class InputPage {

  lastImage: string = null;
  loading: Loading;

  public base64Image: string;

  img:any;
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


  title1:any;
  description1:any;
  video1:any;

  title2:any;
  description2:any;
  video2:any;

  title3:any;
  description3:any;
  video3:any;

  title4:any;
  description4:any;
  video4:any;

  title5:any;
  description5:any;
  video5:any;

  title6:any;
  description6:any;
  video6:any;

  title7:any;
  description7:any;
  video7:any;

  title8:any;
  description8:any;
  video8:any;

  title9:any;
  description9:any;
  video9:any;

  title10:any;
  description10:any;
  video10:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController,public platform: Platform,public toastCtrl: ToastController,public loadingCtrl: LoadingController) {
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

    this.title1=null;
    this.title2=null;
    this.title3=null;
    this.title4=null;
    this.title5=null;
    this.title6=null;
    this.title7=null;
    this.title8=null;
    this.title9=null;
    this.title10=null;
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
        title: this.title1,
        description: this.description1,
        video: this.video1
      },{
        title: this.title2,
        description: this.description2,
        video: this.video2
      },{
        title: this.title3,
        description: this.description3,
        video: this.video3
      },{
        title: this.title4,
        description: this.description4,
        video: this.video4
      },{
        title: this.title5,
        description: this.description5,
        video: this.video5
      },{
        title: this.title6,
        description: this.description6,
        video: this.video6
      },{
        title: this.title7,
        description: this.description7,
        video: this.video7
      },{
        title: this.title8,
        description: this.description8,
        video: this.video8
      },{
        title: this.title9,
        description: this.description9,
        video: this.video9
      },{
        title: this.title10,
        description: this.description10,
        video: this.video10
      }];

    for (let slide of slides){
      if (slide.title==null){
        slides=slides.slice(0,slides.indexOf(slide));
        break;
      }
    }

    let recipe = {
      title: this.title,
      img: this.img,
      subtitle1:this.subtitle1,
      subtitle2:this.subtitle2,
      ingredients:ingredients,
      slides:slides
    };

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
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    Camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
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
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });

  }

// Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName =  n + ".jpg";
    return newFileName;
  }

// Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    File.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
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

// Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }


  public uploadImage() {
    // Destination URL
    var url = "http://yoururl/upload.php";

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };

    const fileTransfer = new Transfer();

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();

    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Image succesful uploaded.');
    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });
  }

}
