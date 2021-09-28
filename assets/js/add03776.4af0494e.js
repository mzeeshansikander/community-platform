"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[454],{3808:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o={id:"dataMigration",title:"Automated Backup and Migration"},s=void 0,c={unversionedId:"Server Maintenance/dataMigration",id:"Server Maintenance/dataMigration",isDocsHomePage:!1,title:"Automated Backup and Migration",description:"The platform consists of many interacting components, including local cache and server databases, frontend code, backend code and serverless functions, and cloud file storage.",source:"@site/docs/Server Maintenance/data-migration.md",sourceDirName:"Server Maintenance",slug:"/Server Maintenance/dataMigration",permalink:"/community-platform/Server Maintenance/dataMigration",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Server Maintenance/data-migration.md",tags:[],version:"current",frontMatter:{id:"dataMigration",title:"Automated Backup and Migration"},sidebar:"mainSidebar",previous:{title:"Deployment via CircleCI",permalink:"/community-platform/Deployment/circle-ci"},next:{title:"Manual Backups",permalink:"/community-platform/Server Maintenance/manualBackups"}},d=[],m={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The platform consists of many interacting components, including local cache and server databases, frontend code, backend code and serverless functions, and cloud file storage."),(0,r.kt)("p",null,"From time to time (such as ahead of large updates), it might be useful to migrate all data to a In order to fully ensure major updates aren't breaking, a full preview deployment is a useful way to check for legacy or unexepected issues."),(0,r.kt)("p",null,"Currently this can be done in a semi-automated way using a script in the scripts folder to take a copy of the production site database and copy it to a preview site."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd scripts\nts-node ./maintenance/reset-staging-site.ts\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This script requires access to a service worker with specific permissions for source and target projects, and intermediate storage buckets."))),(0,r.kt)("p",null,"For more information about the script and known limitations see the source code at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/blob/master/scripts/maintenance/reset-staging-site.ts"},"scripts/maintenance/reset-staging-site.ts"),"."),(0,r.kt)("p",null,"The script is currently run weekly via the github action, see the source code at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ONEARMY/community-platform/blob/master/.github/workflows/reset-staging-site.yml"},".github/workflows/reset-staging-site.yml"),")"))}u.isMDXComponent=!0}}]);