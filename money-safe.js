let safe           = 500.00                      
let money          = prompt("How much money do you want ?")


if ( money != NaN && money > 0 && money !== null){ //  (4) (3) (5)

    if (money <= safe){                            //  (2)

    let rest = safe - money                        //  (1)
    alert("DONE!!")
    alert("Remaining money in the safe " + rest) }

    else {
        alert("Insufficient funds")
    }
} else {
    alert("Please enter the correct amount")
}


//Вычислялось сколько денег осталось и результат вывести через "alert()"  (1)
//Дополнительно, проверить если достаточно денег чтобы выдать сумму целиком   (2)
//Проверить если значение суммы (money) не отрицательное (3)
//БОНУС: Если вводится не число, предотвратить выдачу денег. (4)
//БОНУС: Если пользователь отменяет окно "prompt()", проверить какой тип возвращается и отменить выдачу денег (5)