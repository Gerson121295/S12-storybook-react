import{j as h}from"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";const C=({label:o,size:f="normal",allCaps:g=!1,color:v,fontColor:L})=>h.jsx("span",{className:`${f} ${v} label`,style:{color:L},children:g?o.toUpperCase():o});C.__docgenInfo={description:`!TOdas son opcionales\r
allCaps: boolean,\r
color: 'text-primary' | 'text-secondary' | 'text-tertiary',\r
fontColor?: string, texto del span`,methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label Color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font Color"}}};const M={title:"UI/labels/MyLabel",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"AllCaps",allCaps:!0}},r={args:{label:"SecondaryL",color:"text-secondary"}},l={args:{label:"CustomColor",fontColor:"#5517ac"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  //exporta y crea la story
  args: {
    //define el valor del label de MyLabel.tsx
    label: 'Basic label'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  //exporta y crea la story
  args: {
    //define el valor del label de MyLabel.tsx
    label: 'AllCaps',
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  //exporta y crea la story
  args: {
    //define el valor del label de MyLabel.tsx
    label: 'SecondaryL',
    color: 'text-secondary'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,b,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  //exporta y crea la story
  args: {
    //define el valor del label de MyLabel.tsx
    label: 'CustomColor',
    fontColor: '#5517ac'
  }
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const q=["Basic","AllCaps","SecondaryL","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as SecondaryL,q as __namedExportsOrder,M as default};
