pkgname="axskel-hypr"
pkgver="2.22"
pkgrel="1"
pkgdesc="skel configs and looks for AxOS Hypr"
arch=("x86_64")
depend=("sleex" "hyprland")


package(){
   mkdir -p ${pkgdir}/etc/skel/
   cp -r ${srcdir}/.config/ ${pkgdir}/etc/skel/
}
