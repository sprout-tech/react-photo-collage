"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var S = {};
S.PhotoContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: ", "; \n    margin: ", ";\n    overflow: hidden; \n    position: relative; \n    flex: 1;\n"], ["\n    height: ", "; \n    margin: ", ";\n    overflow: hidden; \n    position: relative; \n    flex: 1;\n"])), function (props) { return props.pHeight; }, function (props) { return props.pMargin; });
S.HoverMask = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: none;\n    background-color: rgba(0, 0, 0, .4);\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: absolute;\n    cursor: pointer;\n    ", ":hover & {\n        display: block;\n    }\n"], ["\n    display: none;\n    background-color: rgba(0, 0, 0, .4);\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    position: absolute;\n    cursor: pointer;\n    ", ":hover & {\n        display: block;\n    }\n"])), S.PhotoContainer);
S.NumOfRemaining = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: #fff;\n    font-size: 35px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    &:before {\n        content: '+';\n    }\n"], ["\n    color: #fff;\n    font-size: 35px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    &:before {\n        content: '+';\n    }\n"])));
S.ViewMore = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 100%; \n    height: 100%; \n    position: absolute; \n    z-index: 1; \n    cursor: pointer;\n"], ["\n    width: 100%; \n    height: 100%; \n    position: absolute; \n    z-index: 1; \n    cursor: pointer;\n"])));
S.Img = styled_components_1.default.img.attrs({
    src: function (props) { return props.pSource; }
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    position: absolute;\n    top: ", ";\n    left: 50%;\n    transform: ", ";\n"], ["\n    position: absolute;\n    top: ", ";\n    left: 50%;\n    transform: ", ";\n"])), function (props) { return (props.loaded === 'portrait' ? '0%' : '50%'); }, function (props) { return (props.loaded === 'portrait' ? 'translate(-50%, -0%)' : 'translate(-50%, -50%)'); });
var Photo = function (props) {
    var index = props.index, source = props.source, numOfRemainingPhotos = props.numOfRemainingPhotos, photosHeight = props.photosHeight, margin = props.margin, onClick = props.onClick;
    var _a = react_1.useState(false), loaded = _a[0], setLoaded = _a[1];
    var _b = react_1.useState(0), width = _b[0], setWidth = _b[1];
    var _c = react_1.useState(0), height = _c[0], setHeight = _c[1];
    var _d = react_1.useState(''), orientation = _d[0], setOrientation = _d[1];
    var imgClick = function (e) {
        onClick(e, { source: source, index: index });
    };
    var handleImageLoaded = function (e) {
        if (!loaded) {
            var _a = e.currentTarget, width_1 = _a.width, height_1 = _a.height;
            setLoaded(true);
            setWidth(width_1);
            setHeight(height_1);
            setOrientation(width_1 <= height_1 ? 'portrait' : 'landscape');
        }
    };
    var handleImageErrored = function (e) { };
    if (numOfRemainingPhotos) {
        return (react_1.default.createElement(S.PhotoContainer, { pHeight: photosHeight, pMargin: margin, onClick: imgClick },
            react_1.default.createElement(S.HoverMask, null),
            react_1.default.createElement(S.ViewMore, null,
                react_1.default.createElement(S.NumOfRemaining, null, numOfRemainingPhotos)),
            react_1.default.createElement(S.Img, { pSource: source, onLoad: handleImageLoaded, onError: handleImageErrored })));
    }
    else {
        return (react_1.default.createElement(S.PhotoContainer, { pHeight: photosHeight, pMargin: margin, onClick: imgClick },
            react_1.default.createElement(S.HoverMask, null),
            react_1.default.createElement(S.Img, { pSource: source, onLoad: handleImageLoaded, onError: handleImageErrored })));
    }
};
exports.default = Photo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=photo.js.map