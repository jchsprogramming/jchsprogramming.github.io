package matchingGame;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.concurrent.TimeUnit;

public class Client {
	public static void clearScreen() {  
		for (int i = 0; i < 1000; i++) {
		    System.out.println();   
		}
	}  
	
	public static void main(String[] args) throws IOException, InterruptedException {
		DataInputStream reader = new DataInputStream(System.in);
		
		ArrayList nums = new ArrayList(Arrays.asList("1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 ", "10", "11", "12"));
		ArrayList suits = new ArrayList(Arrays.asList("💚", "👨🏻‍🦰", "🍀", "🌈", "🎩", "🇮🇪"));
		
		Deck show = new Deck(nums);
		Deck hide = new Deck(suits);
		
		int num1, num2;
		int pairs = 0, turns = 0;
		
		hide.shuffle();
		
		while (pairs < hide.getSize() / 2) {
			System.out.println(show.outputCards());
			
			System.out.print("Pick a card to flip over: ");
			num1 = Integer.parseInt(reader.readLine());			
			num1--;
			
			while (hide.getCard(num1).compareCard(show.getCard(num1))) {
				System.out.print("  - Error! You already flipped that card over. Please pick a different one: ");
				num1 = Integer.parseInt(reader.readLine());				
				num1--;
			}
			
			System.out.println("\n" + hide.outputCard(num1));
			
			System.out.print("Pick another card to flip over: ");
			num2 = Integer.parseInt(reader.readLine());			
			num2--;
			
			while ((hide.getCard(num2).compareCard(show.getCard(num2))) || (num1 == num2)) {
				System.out.print("  - Error! You already flipped that card over. Please pick a different one: ");
				num2 = Integer.parseInt(reader.readLine());				
				num2--;
			}
			
			System.out.println("\n" + hide.outputCard(num2));
				
			if (hide.getCard(num1).compareCard(hide.getCard(num2))) {			
				System.out.println("Nice job, you found a pair of " + hide.getCard(num1).getSuit() + "!");
				
				show.setCard(num1, hide.getCard(num1));
				show.setCard(num2, hide.getCard(num2));
				
				pairs++;
			}
			else {
				System.out.println("Try again! You did not find a pair.");
			}
			
			turns++;
			
			TimeUnit.SECONDS.sleep(3);
			clearScreen();
		}
		
		System.out.println(show.outputCards());
		System.out.print("You win! You found all " + hide.getSize() / 2 + " pairs in " + turns + " turns!");
	}
}