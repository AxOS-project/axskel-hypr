pkgname="axskel-hypr"
pkgver="1.1"
pkgrel="1"
pkgdesc="skel configs and looks for AxOS Hypr"
arch=("x86_64")
depend=(
	illogical-impulse-ags
	illogical-impulse-audio
	illogical-impulse-backlight
	illogical-impulse-basic
	illogical-impulse-bibata-modern-classic-bin
	illogical-impulse-font-themes
	illogical-impulse-gnome
	illogical-impulse-gtk
	illogical-impulse-microtex-git
	illogical-impulse-oneui4-icons-git
	illogical-impulse-portal
	illogical-impulse-pymyc-aur
	illogical-impulse-python
	illogical-impulse-screencapture
	illogical-impulse-widgets
)


package(){
   mkdir -p ${pkgdir}/etc/skel/
   mkdir -p ${pkgdir}/usr/share/
   cp -r ${srcdir}/.config/ ${pkgdir}/etc/skel/
   cp -r ${srcdir}/.local/ ${pkgdir}/etc/skel/
}
