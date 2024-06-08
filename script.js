function submitForm() {
    var stressLevel = document.getElementById('stress-level').value;
    
    if (stressLevel < 1 || stressLevel > 10 || isNaN(stressLevel)) {
        alert('Please enter a valid stress level between 1 and 10.');
        return;
    }
  
    displayResult(stressLevel);
 }
  
  
  
 function displayResult(stressLevel) {
    if(stressLevel <= 3){
        document.getElementById('result-stress-level').textContent = "Consider Taking a Short Break, Practise in deep breathing, or going for a walk";
    }else if(stressLevel >= 4 && stressLevel <=7){
        document.getElementById('result-stress-level').textContent = "Try Practising Mindfulness, doing some lite exercise. ";
    }else{
        document.getElementById('result-stress-level').textContent = "it's important to priortize selfcare. consider seeking professional help,";
    }
    
    
     document.getElementById('input-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
 }