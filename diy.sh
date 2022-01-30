#!/usr/bin/env bash
echo -e "--------------------------DIY脚本-----------------------------\n"
Serverfile=$JD_DIR/panel/server.js
RESULT=`ps -e|grep 'server'|sed -e "/grep/d"`  
if [ -z "$RESULT" ]; #判断RESULT是否为空，为空则说明进程未启动 
then 
echo -e "检测到网页服务未启动，尝试启动中...\n" 
pm2 start $Serverfile 
echo -e "网页服务启动成功\n"
else
echo -e "网页服务已启动，跳过重启\n"
fi
pm2 stop jd_crazy_joy_coin