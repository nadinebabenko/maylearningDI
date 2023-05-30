

class Video {
    constructor(title ,  uploader,time ) {
        this.uploader = uploader
        this.time = time
        this.title = title
    }
    watch() {
const sentence =`${this.uploader} watched all 
${this.time} of ${this.title} `;
console.log(sentence)
    }
}
const newvid = new Video("harry potter" , "nadya" , " 5 hours")
newvid.watch()
const newvid2 =new Video("Bridgertons-new season" , "nadya" , " 2 hours")
newvid2.watch();

