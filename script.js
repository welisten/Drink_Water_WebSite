const $smallCupsEl  =  document.querySelectorAll('.cup-small')
const $litersEl     =  document.getElementById('liters')
const $percentageEl =  document.getElementById('percentage')
const $remainedEl   =  document.getElementById('remained')

updateBigCup()

$smallCupsEl.forEach((cup, idx) => {
    cup.addEventListener('click', () => highLightCups(idx))


   // console.log(cup, idx)
})

function highLightCups(idx){
    if($smallCupsEl[idx].classList.contains('full') && !$smallCupsEl[idx].nextElementSibling.classList.contains('full'))
    {
        idx--
    }

    $smallCupsEl.forEach( (cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const $fullCupsEl   = document.querySelectorAll('.cup-small.full').length
    const totalCups     = $smallCupsEl.length

    if($fullCupsEl === 0){
        $percentageEl.style.visibility = 'hidden'
        $percentageEl.style.height = 0
    } else {
        $percentageEl.style.visibility = 'visible'
        $percentageEl.style.height = `${ $fullCupsEl / totalCups * 330}px`
        $percentageEl.innerText = `${ $fullCupsEl / totalCups * 100}%`
    } 

    if($fullCupsEl === totalCups){
        $remainedEl.style.visibility = 'hidden'
        $remainedEl.style.height = 0
    } else {
        $remainedEl.style.visibility = 'visible'
        $remainedEl.style.height = 'auto'
        $litersEl.innerText = `${2 - (250 * $fullCupsEl / 1000)}L`
    }

}