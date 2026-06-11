console.log("تم تحميل ملف الجافا سكريبت بنجاح!");
function addTask() 
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("الرجاء كتابة مهمة أولاً!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;
    
    // إضافة المهمة إلى القائمة
    document.getElementById("taskList").appendChild(li);
    
    // مسح الحقل بعد الإضافة
    input.value = "";
}
