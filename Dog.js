// // Create the Dog class here

class Dog{
    constructor (data){
        Object.assign(this, data);
    }

    getBadgeHtml(){
        if (this.hasBeenLiked){
            return `<img class="badge" id="like-badge" src="/images/badge-like.png" alt="badge">`
        } else if (this.hasBeenSwiped){
            return `<img class="badge" id="like-badge" src="/images/badge-nope.png" alt="badge">`
        } 
    }
    
    setDogHtml (){
        const {name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this;
        const badge = this.getBadgeHtml()
        
        return `
            <img class="dog-img" src="${avatar}" alt="dog-img">
            <div class="dog-text" id="dog-text">
                <h3 class="name" >${name}, ${age}</h3>
                <p>${bio}</p>
            </div>
            <div class="badges-container">
                ${badge? badge : ""} <!-- this is to show blank when badge return undefined -->
            </div>`
    }
}

export default Dog;
