import { useColorModeValue } from "@chakra-ui/color-mode"

import EyeDark from "../assets/eye_dark.svg"
import EyeLight from "../assets/eye_light.svg"
import CheckDark from "../assets/check_dark.svg"
import CheckLight from "../assets/check_light.svg"
import ArrowDark from "../assets/arrow_dark.svg"
import ArrowLight from "../assets/arrow_light.svg"
import SearchDark from "../assets/search_dark.svg"
import SearchLight from "../assets/search_light.svg"
import SwitchDark from "../assets/switch_dark.svg"
import SwitchLight from "../assets/switch_light.svg"
import SwitchDarkIso from "../assets/switch_dark_iso.svg"
import SwitchLightIso from "../assets/switch_light_iso.svg"
import WorkmizeDark from "../assets/workmize_dark.svg"
import WorkmizeLight from "../assets/workmize_light.svg"
import WorkmizeIsoDark from "../assets/workmize_iso_dark.svg"
import WorkmizeIsoLight from "../assets/workmize_iso_light.svg"

export function useWorkmizeColorMode() {
  const white_p = "#FFFFFF"
  const white_s = "#edf2f7"
  const white_t = "#e2e4e6"
  const white_q = "#E2E8F0"
  const white_qui = "#cbd5e0"
  const white_sex = "#F7FAFC"
  const white_h = "#F8F8F8"
  const white_o = "#F2F2F2"
  const white_n = "#F9F9FB"
  const white_dec = "#F6F7FB"

  const gray_p = "#718086"
  const gray_s = "#A0AEC0"
  const gray_t = "#464750"
  const gray_q = "#2F353D"
  const gray_qui = "#C8C8C8"

  const black_p = "#0F1016"
  const black_s = "#171923"
  const black_t = "#22242e"
  const black_q = "#1C1E27"

  const purple_p = "#322659"
  const purple_s = "#31274F"
  const purple_t = "#BCA8E9"
  const purple_q = "#D6BCFA"

  const loginAsideBackground = {
    light:
      "transparent linear-gradient(138deg, #B794F4 0%, #805AD5 100%, #312950 100%, #322659 100%) 0% 0% no-repeat padding-box",
    dark:
      "transparent linear-gradient(138deg, #805AD5 0%, #312950 100%, #322659 100%) 0% 0% no-repeat padding-box"
  }

  const Eye = useColorModeValue(EyeLight, EyeDark)
  const Check = useColorModeValue(CheckLight, CheckDark)
  const Arrow = useColorModeValue(ArrowLight, ArrowDark)
  const Search = useColorModeValue(SearchLight, SearchDark)
  const SwitchText = useColorModeValue(SwitchLight, SwitchDark)
  const Workmize = useColorModeValue(WorkmizeLight, WorkmizeDark)
  const SwitchIso = useColorModeValue(SwitchLightIso, SwitchDarkIso)
  const WorkmizeIso = useColorModeValue(WorkmizeIsoLight, WorkmizeIsoDark)

  const loginAsideBg = useColorModeValue(
    loginAsideBackground.light,
    loginAsideBackground.dark
  )

  const bt_mainBg = useColorModeValue(white_p, black_p)
  const bt_headerBg = useColorModeValue(white_q, gray_t)

  const cal_bgColor = useColorModeValue(white_s, black_p)
  const cal_textColor = useColorModeValue(black_t, gray_p)
  const cal_borderColor = useColorModeValue(white_p, white_qui)

  const dra_headerBg = useColorModeValue(purple_t, purple_s)
  const dra_containerBg = useColorModeValue(white_p, black_s)
  const dra_closeButtonBg = useColorModeValue(gray_s, gray_t)

  const fb_text = useColorModeValue(black_t, white_t)
  const fb_buttonBg = useColorModeValue(white_t, gray_q)
  const fb_buttonPressedBg = useColorModeValue(purple_q, purple_p)

  const mod_mainBg = useColorModeValue(white_p, black_t)
  const mod_mainText = useColorModeValue(black_t, white_p)
  const mod_innerContainerBg = useColorModeValue(white_sex, black_s)

  const pagCB_buttonBg = useColorModeValue(gray_s, black_t)
  const pagCB_buttonText = useColorModeValue(white_h, gray_p)

  const tab_oddBg = useColorModeValue(white_o, black_q)
  const tab_tableBg = useColorModeValue(white_n, black_t)
  const tab_borderColor = useColorModeValue(black_s, gray_t)
  const tab_checkboxBorder = useColorModeValue(black_t, white_n)

  const usrCombo_borderColor = useColorModeValue(black_p, white_p)
  const boxShadow = useColorModeValue("0px 2px 5px #0000001C", "none")

  const dash_borderBg = useColorModeValue(gray_qui, gray_t)
  const dash_containerBg = useColorModeValue(white_dec, black_t)

  return {
    Eye,
    Check,
    Arrow,
    Search,
    Workmize,
    SwitchIso,
    SwitchText,
    WorkmizeIso,

    bt_mainBg,
    bt_headerBg,
    loginAsideBg,

    cal_bgColor,
    cal_textColor,
    cal_borderColor,

    dra_headerBg,
    dra_containerBg,
    dra_closeButtonBg,

    fb_text,
    fb_buttonBg,
    fb_buttonPressedBg,

    mod_mainBg,
    mod_mainText,
    mod_innerContainerBg,

    pagCB_buttonBg,
    pagCB_buttonText,

    tab_oddBg,
    tab_tableBg,
    tab_borderColor,
    tab_checkboxBorder,

    boxShadow,
    usrCombo_borderColor,

    dash_borderBg,
    dash_containerBg
  }
}
