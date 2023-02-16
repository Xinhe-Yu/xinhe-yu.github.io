class diaporamaGenerator {
    constructor(startPageNumber, endPageNumber) {
        this.startPageNumber = startPageNumber;
        this.endPageNumber = endPageNumber;
    }
    generate() {
        for (var pageNumber = this.startPageNumber; pageNumber <= this.endPageNumber; pageNumber++) {
            var className;
            if (pageNumber % 2 == 0) {
                className = "pageEven";
            } else {
                className = "pageOdd";
            }
            var generateText = `<section class="${className}" id="${pageNumber}">
    <div class="text-center">
        ${pageNumber}
    </div>
</section>`
            console.log(generateText);
        }
    }
}

const newpages = new diaporamaGenerator(21, 22);
newpages.generate()