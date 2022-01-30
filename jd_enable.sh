hangupfile="/etc/cont-init.d/40-hangup"
panelfile="/etc/cont-init.d/20-jup"
function disable_hangup(){
    sed -i "s/run_hangup\ 2/#run_hangup\ 2/g" $hangupfile
    echo "挂机程序已经禁用"
    sleep 1s
}

function enable_hangup(){
    sed -i "s/#run_hangup\ 2/run_hangup\ 2/g" $hangupfile
    echo "挂机程序已经启用"
    sleep 1s
}

function enable_panel(){
    cd /etc/cont-init.d/
    wget -O 70-jup https://gitee.com/c939984606/qljs/raw/master/dependence/70-jup 
    echo "面板断电重启自启动已经启用成功"
    sleep 1s
}

function disable_panel(){
    cd /etc/cont-init.d/
    rm -rf 70-jup
    echo "面板断电重启自启动已经禁用"
    sleep 1s
}

function copy_panel(){
    cd /jd
    rm -rf panel
    wget -O panel.tar.gz https://gitee.com/c939984606/qljs/raw/master/dependence/panel.tar
    tar -xvf panel.tar
    echo "JD面板已经复制成功"
    cd /jd/config
    mv diy.sh diy.sh.bak
    echo ""
    echo "启动面板中。。。"
    sleep 1s
    wget -O diy.sh https://gitee.com/c939984606/qljs/raw/master/dependence/diy.sh
    wget -O auth.json https://gitee.com/c939984606/qljs/raw/master/dependence/auth.json
    jup
    echo ""
    echo ""
    echo -e "旧的diy.sh 备份到/jd/config/diy.sh.bak"
    echo -e "面板地址：ip:端口号"
    echo -e "用户名密码：admin admin"
    echo -e "如需更改密码请修改config目录下 auth.josn"
}
##主程序
#判断是否docker shell
if [ ! -d "/jd" ]; then
  echo -e "当前环境不是容器终端，请在容器终端中运行！！！"
  exit
else
  echo -e "当前环境为容器终端,环境正常"
fi
echo -e ""
echo -e "******************************"
echo -e "*     JD 小工具 - By Kevin   *"
echo -e "*    1- 禁用挂机程序         *"
echo -e "*    2- 启用挂机程序         *"
echo -e "*    3- 禁用面板断电自启动   *"
echo -e "*    4- 启用面板断电自启动   *"
echo -e "*    5- 安装并启动JD面板     *"
echo -e "*    0- 退出                 *"
echo -e "******************************"
echo ""
read -p "请输入数字选择：" run
    case "$run" in
    1)
    disable_hangup
    ;;
    2)
    enable_hangup
    ;;
    3)
    disable_panel
    ;;
    4)
    enable_panel
    ;;    
    5)
    copy_panel
    ;;
    0)
    exit
    ;;
    esac

echo "All Done"
!wqecho "更多请关注:https://m.abcdl.cn"