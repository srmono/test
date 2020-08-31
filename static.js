class Book{

   static callBook(){
       alert(this === Book)
   }
}

Book.callBook()