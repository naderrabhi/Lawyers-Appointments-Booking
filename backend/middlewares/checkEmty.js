const emtyEducation = (education) => {
    if (education.degree || education.from || education.to) {
        return true
    }
     
}
const emtySocial = (social) => {
    Object.keys(social).forEach(key => {
        if (social[key] === '') {
          delete social[key];
        }
        return social
      });
}
const emtyExperience = (experience) => {
    if (experience.degree || experience.from || experience.to) {
        return true
    }
}

module.exports = {emtyExperience,emtySocial,emtyEducation}