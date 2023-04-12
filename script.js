//complete this code
class Rectangle{
	constructor(rect_w , rect_h) {
		this.rect_w  = rect_w;
		this.rect_h  = rect_h;
	}

	get rect_w() {
	    return this.rect_w;
	}
	
	get rect_h() {
	    return this.rect_h;
	}

	set rect_w(rect_w ) {
		this.rect_w  = width;
	}

	set rect_h(rect_h ) {
		this.rect_h  = rect_h;
	}

	getArea() {
		return this.rect_w  * this.rect_h;
	}
}

class Square extends Rectangle {
	constructor(side) {
		super(side, side);
	}
	
	getPerimeter() {
		return 4 * this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
