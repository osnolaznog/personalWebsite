const blurredCover = () => {
    let cover = querySelectorAll('.project-cover');

    cover.mouseenter(function() {
        this.addClass('blurred');
        console.log("Added class")
    }).mouseleave(function(){
        this.removeClass('blurred');
        console.log("Removed class");
    });
}


