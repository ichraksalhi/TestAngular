import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./../../assets/scss/main.css']
})
export class CountComponent implements OnInit {
  text ='';
  htmlToAdd = '';

  constructor() { }

  ngOnInit(): void { }
    /** method 1  */
    /**  call of countRepeatedWords  and disply of the result   */
    Counter(text) {
         let Input = this.text;
         let FinalResult = this.countRepeatedWords(Input);
         let words = ''
         let numberofoccurence ='';
         for (let  i in FinalResult)
               { 
                  words = words + '  ' +i + '  '  ;
                  numberofoccurence = numberofoccurence + ' ' + FinalResult[i];
                 }
         this.htmlToAdd = '<div class="txt">' + words + ' <br> ' + numberofoccurence+ '</div>';

    }
  

   /** funtion that count the  number of occurece  */
   countRepeatedWords(sentence) {
        let words = sentence.split(" ");
        let wordMap: any = {};

        for (let i = 0; i < words.length; i++) {
                 let currentWordCount = wordMap[words[i]];
                 let count = currentWordCount ? currentWordCount : 0;
            wordMap[words[i]] = count + 1;
    }
    return wordMap;
  }



/**  method 2  */
/**  
resultat ='';
words='';
method2(text) {
 
  this.text.split(/\s+/).forEach((word) => {
    const numberOfOccurrences = text.match(new RegExp(word, 'g')).length;

    console.log(`${word} - ${numberOfOccurrences}`);

   this.resultat = numberOfOccurrences;
   this.words = word;
  });
}

*/

}