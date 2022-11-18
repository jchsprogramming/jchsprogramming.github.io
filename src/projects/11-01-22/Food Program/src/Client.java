// Alex Li and Sydney Shifman
// Programming Club
// 10-26-22
// Food Program

import java.io.*;
import javax.swing.JFrame;
import javax.swing.ImageIcon;
import javax.swing.JLabel;
import javax.swing.*;
import java.awt.*;
import java.awt.image.BufferedImage;
import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.net.URL;
import java.time.LocalTime;

import javax.imageio.ImageIO;
import java.applet.*;
import java.awt.*;
import java.lang.Math;  

public class Client {
public static void showImg(JLabel[] label, int b)
{
var frame = new JFrame();

frame.add(label[b]);
frame.setDefaultCloseOperation
(JFrame.EXIT_ON_CLOSE);
frame.pack();
frame.setVisible(true);  
}

public static void main(String[] args) throws IOException
{
DataInputStream reader = new DataInputStream(System.in);
String userInput;
int min = 0;  
int max = 4;  
int times;
int i = 1;
int b;

ImageIcon[] food = new ImageIcon[5];
food[0] = new ImageIcon("food1.png");
food[1] = new ImageIcon("food2.jpg");
food[2] = new ImageIcon("food3.jpg");
food[3] = new ImageIcon("food4.jpg");
food[4] = new ImageIcon("food5.jpg");

JLabel[] label = new JLabel[5];
for (int j = 0; j<=4; j++)
{
label[j] = new JLabel(food[j]);
}


System.out.print("How many times should you see pictures of foods? ");
userInput = reader.readLine();
times = Integer.parseInt(userInput);

while(i<=times)
{
b=(int)(Math.random()*(max-min+1)+min);
showImg(label, b);
try {
   Thread.sleep(2 * 1000);    
} catch (InterruptedException e) {
   e.printStackTrace();
}
System.out.flush();

i++;
}
 
}

}