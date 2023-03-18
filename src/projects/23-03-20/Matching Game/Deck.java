package matchingGame;

import java.util.ArrayList;

public class Deck {
	ArrayList <Card> deck;
	
	public Deck() {
		deck = new ArrayList <Card> ();
	}
	
	public Deck(ArrayList suits) {
		deck = new ArrayList <Card> ();
		
		int max;
		
		try {
			Double.parseDouble((String)(suits.get(0)));
			max = 1;
		} catch(NumberFormatException e) {
			max = 2;
		}
		
		for (int i = 0; i < suits.size(); i++) {
			for (int j = 0; j < max; j++) {
				deck.add(new Card((String)(suits.get(i))));
			}
		}
	}
	
	public int getSize() {
		return deck.size();
	}
	
	public Card getCard(int i) {
		return deck.get(i);
	}
	
	public void setCard(int i, Card card) {
		deck.set(i, card);
	}
	
	public void shuffle() {
		Card card;
		int rand;
		
		for (int i = 0; i < deck.size(); i++) {
			rand = (int)(Math.floor(Math.random() * deck.size()));
			
			card = deck.get(i);
			card = deck.set(rand, card);
			deck.set(i, card);
		}
	}
	
	public String outputCard(int card) {
		String s = deck.get(card).getSuit();
		String n = "\n";
		
		String row1 = "---------";
		String row2 = "| " + s + "    |";
		String row3 = "|       |";
		String row4 = "|       |";
		String row5 = "|    " + s + " |";
		String row6 = "---------";
		
		return row1 + n + row2 + n + row3 + n + row4 + n + row5 + n + row6 + n;
	}
	
	public String outputCardRow(int row) {
		Card card;
		String s;
		
		String n = "\n";
		String sp = "\t";
		
		String col1 = "";
		String col2 = "";
		String col3 = "";
		String col4 = "";
		String col5 = "";
		String col6 = "";
		
		String c1 = "---------";
		String c3 = "|       |";
		String c4 = "|       |";
		String c6 = "---------";
		
		String c2;
		String c5;
		
		int start;
		int stop;
		
		if (row == 1) {
			start = 0;
			stop = deck.size() / 2;
		} else {
			start = deck.size() / 2;
			stop = deck.size();
		}

		for (int i = start; i < stop; i++) {
			card = deck.get(i);
			s = card.getSuit();
			
			c2 = "| " + s + "    |";
			c5 = "|    " + s + " |";
			
			col1 += c1 + sp;
			col2 += c2 + sp;
			col3 += c3 + sp;
			col4 += c4 + sp;
			col5 += c5 + sp;
			col6 += c6 + sp;
		}
		
		return col1 + n + col2 + n + col3 + n + col4 + n + col5 + n + col6;
	}
	
	public String outputCards() {
		String row1 = outputCardRow(1);
		String row2 = outputCardRow(2);
		
		String n = "\n";

		return row1 + n + row2 + n;
	}
}