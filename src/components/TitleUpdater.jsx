// libraries
import PropTypes from "prop-types";

// hooks
import { useEffect } from "react";
import { useLocation } from "react-router";

const titles = {
    "/": "كودفيجن - الرئيسية",
    "/tracks": "كودفيجن - المسارات التعليمية",
    "/courses": "كودفيجن - الكورسات",
    "/exercises": "كودفيجن - التمارين والمشاريع",
    "/articles": "كودفيجن - المقالات ",
    "/community": "كودفيجن - المجتمع ",
    "/codeEditor": "كودفيجن - محرر الاكواد ",
    "/signin": "كودفيجن -  تسجيل الدخول",
    "/signup": "كودفيجن - أنشاء حساب",
};
function TitleUpdater({ titleParam = "صفحة غير معروقة" }) {
    const { pathname } = useLocation();

    useEffect(() => {
        const title = titles[pathname] || `كودفيجن - ${titleParam}`;
        document.title = title;
    }, [pathname, titleParam]);
    return null;
}

TitleUpdater.PropTypes = {
    titleParam: PropTypes.string,
};

export default TitleUpdater;
