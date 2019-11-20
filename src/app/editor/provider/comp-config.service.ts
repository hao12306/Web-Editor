import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompConfigService {
      
    constructor() {}

    //根据组件类型，获取视图组件初始化配置
    getCompDefaultConfig(style = 'text') {

        // TODO:获取接口写在后端,前端增加视图组件配置页面
        let data = {
            line: {
                compIndex: 2,
                name:'横线',
                type:'line',
                data: {
                },
                style: this._defCompStyle(),
            },
            text: {
                compIndex: 2,
                name:'文本',
                type:'text',
                data: {
                    text_val:'双击修改文本',
                },
                style: this._defCompStyle({
                    width:120,
                    height:30
                }),
            },
            input: {
                compIndex: 2,
                name:'输入框',
                type:'input',
                data: {
                    input_val:'',
                    placeholder:"输入"
                },
                style: this._defCompStyle({
                    width:220,
                    height:30
                }),
            },
            textarea: {
                compIndex: 2,
                name:'多行输入',
                type:'textarea',
                data: {
                    textarea_val:'',
                    placeholder:"文本输入"
                },
                style: this._defCompStyle({
                    width:220,
                    height:60
                }),
            },
            img:  {
                compIndex: 2,
                name:'图片',
                type:'img',
                data: {
                    img_url:'./../assets/imgs/es.jpeg',
                },
                style: this._defCompStyle({
                    width:120,
                    height:80
                }),
            } ,    
            button:{
                compIndex: 3,
                name:'按钮',
                type:'button',
                data: {
                    button_val:'确认'
                },
                style: this._defCompStyle({
                    width:80,
                    height:30
                }),
                event:{
                    clickBool: false,
                    click: {
                        data: null
                    },
                    routeBool: true,
                    route:{
                        route_link: 'home',
                        data: null,
                    }
                }
            },  
            video:{
                compIndex: 3,
                name:'视频',
                type:'video',
                data: {
                    video_val:'http://www.w3school.com.cn/i/horse.mp3'
                },
                style: this._defCompStyle({
                    width:300,
                    height:180
                }),
                event:{
            
                }
            },
            gauge:{
                compIndex: 3,
                name:'图表',
                type:'gauge',
                data: {
            
                },
                style: this._defCompStyle({
                    width:300,
                    height:180
                }),
                event: {
    
                }
            },
            thermomenter: {
                compIndex: 3,
                name:'刻度盘',
                type:'thermomenter',
                data: {
            
                },
                style: this._defCompStyle({
                    width:300,
                    height:180
                }),
                event: {
    
                }
            },
            chart:{
                compIndex: 3,
                name:'图表',
                type:'chart',
                data: {
            
                },
                style: this._defCompStyle({
                    width:300,
                    height:180
                }),
                event: {

                }
            }         
        }
        return data[style]  ? data[style] : {} 
    }

    auxiComp = {
        compIndex: 999,
        name:'辅助线',
        type:'auxi',
        data: {
            title: '辅助线'
        },
        style: this._defCompStyle()
    }

    areaComp = {
        compIndex: 999,
        name:'区域选中',
        type:'area',
        data: {
            title: '区域选中'
        },
        style: this._defCompStyle()
    }
    _defCompStyle(customStyle ?:any) {
        let styleJson = {
            height:100,
            width: 100,
            position: 'absolute',
            textAlign:'center',
            top:400,
            left:200,
            border: 1,
            borderColor: 'red',
            borderWidth: 1,
            borderStyle: 'solid',
            paddingTopBottom:0,
            paddingLeftRight:0
        }
        for(let key in customStyle) {
            styleJson[key] = customStyle[key];
        }
        return styleJson;
    }

    getAuxiComp() {
        return this.auxiComp;
    }

    getAreaComp() {
        return this.areaComp;
    }

}