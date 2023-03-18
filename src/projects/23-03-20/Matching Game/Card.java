package matchingGame;

public class Card {
	private String suit;
	
	public Card() {
		suit = null;
	}
	
	public Card(String s) {
		suit = s;
	}
	
	public String getSuit() {
		return suit;
	}
	
	public boolean compareCard(Card card) {
		return suit.equals(card.getSuit());
	}
}
