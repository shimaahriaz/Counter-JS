const counter = document.querySelector(".counter");
const button = document.querySelectorAll(".btn");

let count = 0;
button.forEach(ele =>{
    ele.addEventListener("click", (e) =>{
        const styles = e.currentTarget.classList;
        if(styles.contains("increase")){
            count++;
            counter.style.color = 'green'
        }
        if(styles.contains("decrease")){
            counter.style.color = 'red'
            count--;
            
        }
        if(styles.contains("reset")){
            count = 0;
            if(count === 0){
                counter.style.color = 'gray'
            }
            
            
        }
        counter.textContent = count;
    })
})