function showData (e){
    e.preventDefault()
    //console.log("registered");
    //DOM document object modul
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    //document.getElementById("name").value = "" untuk mengembalikan nilai no text pada input 

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    //selain itu bisa menggunakan data object dengan format sbb:
    // let dataObject = {
    //    dataName = name, (dataName sebagai property : name sebagai value)
    //    dataEmail = email,
    //     phone,
    //     subject,
    //     message,
    //}
    // setelah itu console.log(dataObject);
    //atau bisa lebih rapih lagi dengan console.table(dataObject)

    //VALIDATION
    if (name == "") {
    return alert("name input can not be empty") //return digunaan untuk menghentikan proses selanjutnya jika terjadi error, ketika return dihapus alert menyala dan melanjutkan ke proses selanjutnya

         
    }
    
    //console.log("masih lanjut proses");

    //untuk membuat elemen anchor diperlukan metode berikut :
    
    let emailReceiver = "novita_triwahyuningsih@yahoo.com"
    let a = document.createElement ("a")
    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hello, my name is ${name},posisi ${subject} and this is my phone ${phone}, saya ingin menyampaikan pada diri saya sendiri bahwa kamu ${message}`
    //a.href = `https://dumbways.id/`
    //atau bisa connect ke link dengan a.href = `alamat website`
    a.click()

}

