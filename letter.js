let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '  亲爱的幽幽宝贝~，今天是2024年2月11日，是我们在一起第<    100天      /    36525天   <依稀记得一百天前，表白的时候，我们都很羞涩。现在我们应该都很了解对方了吧。<在这一百天，你的温柔和可爱已经深深刻在我的脑海里，我真的真的超级喜欢你！<在往后的日子，我会尊重你所认为正确的决定，以你的快乐作为最优先的考虑。<我会努力提升自己，从而在你需要时可以更好地陪伴你并且尽我所能帮助你<我会关注你的感受和敏感的需求，恪守我们的承诺，在我心里，你永远是不可替代的！<               我爱你。<     				   ——爱你的顺顺'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },250);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 7000);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
