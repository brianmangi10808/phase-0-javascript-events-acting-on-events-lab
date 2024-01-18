// Your implementation of moveDodgerLeft and moveDodgerRight functions
function moveDodgerLeft() {
   
}

function moveDodgerRight() {
    
}


describe('moveDodgerLeft()', () => {
    let dodger;

    beforeEach(() => {
       
        dodger = document.getElementById('dodger');
    });

    it('moves the DODGER to the left', () => {
        const left = parseInt(dodger.style.left) || 0;

        moveDodgerLeft();

        const newPosition = parseInt(dodger.style.left) || 0;

        expect(newPosition).to.be.below(left);
    });
});


describe('moveDodgerRight()', () => {
    let dodger;

    beforeEach(() => {
        
        dodger = document.getElementById('dodger');
    });

    it('moves the DODGER to the right', () => {
        const left = parseInt(dodger.style.left) || 0;

        moveDodgerRight();

        const newPosition = parseInt(dodger.style.left) || 0;

        expect(newPosition).to.be.above(left);
    });
});
