const btn = document.querySelector('button');

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value.trim());
    const weight = parseInt(document.querySelector('#weight').value.trim());

    const bmi = weight/((height/100)**2);

    const res = document.querySelector('#results');
    let conclusion;

    if(bmi>25){
        conclusion='Overweight';
    }
    else if(bmi>18 && bmi<25){
        conclusion='Healthy Weight';
    }
    else{
        conclusion='Underweight'
    }

    res.innerHTML=`Your BMI is ${bmi}<br>${conclusion}`;

    document.querySelector('#height').value='';
    document.querySelector('#weight').value='';
})