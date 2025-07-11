function x() {
    for(var i=0;i<=5;i++) {
        function close(newVar) {
            setTimeout(function(){
                console.log(newVar)
            },newVar*1000)
        }
        close(i)
    }
    console.log("hello world")
}
x()