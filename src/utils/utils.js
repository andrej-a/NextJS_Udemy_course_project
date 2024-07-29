import slugify from 'slugify';
import xss from 'xss';


export const getSlug = (title) => slugify(title, {
    lower: true
})

export const getXSSInformation = (info) => xss(info);