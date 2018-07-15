import nlp from 'compromise';


const inputText = document.querySelector('#text-input')
const outputText = document.querySelector('#text-output')
const buttonRun = document.querySelector('#btn-run');
const action = document.querySelector('#action');


buttonRun.addEventListener('click', (event) => {

    let doc = nlp(inputText.value);

    console.log(action.value)

    let str = '--';

    switch(action.value) {
        case 'toPlural':
            str = doc.nouns().toPlural().out('text');
            break;
        case 'toNegative':
            str = doc.sentences().toNegative().out('text')
            break;

        // Senentence 
        case 'toPastTense':
            str = doc.sentences().toPastTense().out('text');
            break;
        case 'toPresentTense':
            str = doc.sentences().toPresentTense().out('text');
            break;
        case 'toFutureTense':
            str = doc.sentences().toFutureTense().out('text');


    }

    console.log('Doc', doc);
    console.info('Terms > ', doc.terms().data())

    outputText.value = str;
})



//var str = doc.nouns().toPlural().out('text')

