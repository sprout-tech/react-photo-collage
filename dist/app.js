"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var react_images_1 = __importDefault(require("react-images"));
var photo_1 = __importDefault(require("./photo"));
var S = {};
S.Row = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n"], ["\n    display: flex;\n"])));
S.Collage = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: ", "\n"], ["\n    width: ", "\n"])), function (props) { return props.cWidth; });
var createLayout = function (photos, layout) {
    var layoutWithPhotos = [];
    layout.map(function (v, i, a) {
        if (layoutWithPhotos.length === 0) {
            layoutWithPhotos.push(photos.slice(0, v));
        }
        else {
            layoutWithPhotos.push(photos.slice(a[i - 1], a[i - 1] + v));
        }
    });
    return layoutWithPhotos;
};
var getNumofDisplayPhotos = function (cL) {
    return cL.reduce(function (pv, cv) {
        return pv.length + cv.length;
    });
};
var createPhotos = function (currLayout, photos, margin, photosHeight, handleClick) {
    var p = [];
    var numOfLayoutPhotos = getNumofDisplayPhotos(currLayout);
    var currIndex = 0;
    currLayout.map(function (v, i) {
        p.push(v.map(function (sv, si) {
            var photoSet = {
                key: 'p' + i + si,
                index: currIndex,
                source: sv.src,
                margin: margin,
                photosHeight: photosHeight[i],
                onClick: handleClick
            };
            if (i === 1 && si === (currLayout[1].length - 1)) {
                photoSet['numOfRemainingPhotos'] = (photos.length - numOfLayoutPhotos);
            }
            currIndex++;
            return react_1.default.createElement(photo_1.default, __assign({}, photoSet));
        }));
    });
    return p;
};
var createContent = function (currPhotos) {
    var cnt = [];
    cnt.push(currPhotos.map(function (v, i) {
        return (react_1.default.createElement(S.Row, { key: i }, v.map(function (sv) { return sv; })));
    }));
    return cnt;
};
var PhotoCollage = function (props) {
    var width = props.width, layout = props.layout, photos = props.photos, margin = props.margin, photosHeight = props.photosHeight;
    var _a = react_1.useState(false), lightboxIsOpen = _a[0], setLightboxState = _a[1];
    var _b = react_1.useState(0), currentImage = _b[0], setCurrentImage = _b[1];
    var handleClick = function (e, _a) {
        var index = _a.index;
        setLightboxState(true);
        setCurrentImage(index);
    };
    var cLayout = createLayout(photos, layout);
    var cPhotos = createPhotos(cLayout, photos, margin, photosHeight, handleClick);
    var cContent = createContent(cPhotos);
    return (react_1.default.createElement(S.Collage, { cWidth: width },
        cContent,
        react_1.default.createElement(react_images_1.default, { currentImage: currentImage, images: photos, isOpen: lightboxIsOpen, onClickPrev: function () { return setCurrentImage(currentImage - 1); }, onClickNext: function () { return setCurrentImage(currentImage + 1); }, onClose: function () { return setLightboxState(false); } })));
};
exports.default = PhotoCollage;
var templateObject_1, templateObject_2;
//# sourceMappingURL=app.js.map