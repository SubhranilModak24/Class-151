AFRAME.registerComponent('move-box',{
    schema:{
      moveX:{type:'number',default:1},  
      moveY:{type:'number',default:2}
    },
    tick: function () {
        this.data.moveX=this.data.moveX-0.01
        this.data.moveY=this.data.moveY+0.013
        var pos=this.el.getAttribute('position')
        pos.x=this.data.moveX
        pos.y=this.data.moveY
        this.el.setAttribute('position',{
            x:pos.x,y:pos.y,z:pos.z
        })
    }
})
