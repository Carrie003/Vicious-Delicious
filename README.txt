
 TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
TTT                                  TTT
TTT            TEXT RAIN             TTT
TTT        PROCESSING PROJECT        TTT
TTT                                  TTT
TTT                                  TTT
 TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
 
Created by                      Allen Quan
                                Kevin Tang
                                
                                
Original Implementation by      Camille Utterback

This is a re-implementation of TextRain.

The video or webcamera image is displayed in grayscale. Text letters fall down with varying speed which is determined by millis(). The letter is pseudo-randomly drawn from a string using randomLetterIndex. Letters will collide with dark objects as if they were rain, and can be interacted with by being pushed up. Foreground objects are determined using an algorithm that compares the brightness of a pixel against a threshold value. The default threshold value is set at 140 with a maximum value of 255.0. The threshold value can be adjusted using UP or DOWN arrow keys, with the value printed in the console. SPACE will enable debug mode, which is another picture with either black or white pixels copied to it according the threshold value.