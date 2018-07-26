// rect is a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height
//var rect = obj.getBoundingClientRect();
//document.getElementById("element1");
//

function overlapping_dom(element1, element2){
    const ele1 = element1.getBoundingClientRect();
    const ele2 = element2.getBoundingClientRect();
    //const ele1_left = ele1.left , ele1_right = ele1.left + ele1.width , ele1_top = ele1.top, ele1_bottom = ele1.top + ele1.height;
    //const ele2_left = ele2.left , ele2_right = ele2.left + ele2.width , ele2_top = ele2.top, ele2_bottom = ele2.top + ele2.height;
    let result = false;
    //if right side of element1 is less than left side of element2; if yes, then no overlap
    //if left side of element1 is more than right side of element2; if yes, then no overlap
    //if bottom side of element1 is less than top side of element2; if yes, then no overlap
    //if top side of element1 is more than bottom side of element2; if yes, then no overlap
    //check if element1 is inside of element2
    //if left side of element1 is more than left side of element2 && right side of element1 is less than right side of element2
    //  && top side of element1 is more than top side of element2 && bottom side of element1 is less than bottom side of element2
    if(ele1.left > ele2.left && ele1.right < ele2.right && ele1.top > ele2.top && ele1.bottom < ele2.bottom){
        return true;
    } else if(ele2.left > ele1.left && ele2.right < ele1.right && ele2.top > ele1.top && ele2.bottom < ele1.bottom){
        //check if element2 is inside of element1
        //if left side of element2 is more than left side of element1 && right side of element2 is less than right side of element1
        //  && top side of element2 is more than top side of element1 && bottom side of element2 is less than bottom side of element1
        return true;
    } else if(ele1.top < ele2.top && ele1.bottom > ele2.top){
        //check the top row overlaps
        //if top side of element1 is less than top side of element2 && bottom side of element1 is more than top side of element2
        //if((left side of element1 is less than left side of element2 && right side of element1 is more than left side of element2)
        //    ||(left side of element1 is more than left side of element2 && right side of element2 is less than right side of element1))
        // then true;
        if((ele1.left < ele2.left && ele1.right > ele2.left)||(ele1.left > ele2.left && ele2.right < ele1.right) ){
        return true;
        }
    } else if(ele1.top > ele2.top && ele1.bottom < ele2.bottom){
        //check the middle row overlaps
        //if top side of element1 is more than top side of element2 && bottom side of element1 is less than bottom side of element2
        //if((left side of element1 is less than left side of element2 && right side of element1 is more than left side of element2)
        //      ||(left side of element1 is less than right side of element2 && right side of element1 is more than right side of element2))
        // then true;
        if((ele1.left < ele2.left && ele1.right > ele2.left)||(ele1.left < ele2.right && ele1.right > ele2.right)){
        return true;
        }
    } else if(ele1.top < ele2.bottom && ele1.bottom > ele2.bottom){
        //check the bottom row overlaps
        //if (top side of element1 is less than bottom side of element2 && bottom side of element1 is more than the bottom side of element2)
        //if((left side of element1 is less than left side element2 && right side of element1 is more than the left side of element2)
        //      ||(left side of element1 is more than left side of element2 && right side of element1 is less than right side of element2))
        // then true;
        if((ele1.left < ele2.left && ele1.right > ele2.left)||(ele1.left > ele2.left && ele1.right < ele2.right)){
        return true;
        }
    } else if(ele1.top === ele2.top && ele1.bottom === ele2.bottom && ele1.left === ele2.left && ele1.right === ele2.right){
        return true;
    }
    console.log(result);
    return false;
}