const Profile = require('../models/profile')

const createProfile = async (req,res) => {

if (req.body.education) {
    const education = req.body.education[0]
    if (education.degree == "" || education.from == "" || education.to == "") {
        delete req.body["education"]
    }
}

if (req.body.experience) {
    const experience = req.body.experience[0]
    if (experience.company == "" || experience.from == "" || experience.to == "") {
        delete req.body["experience"]
    }
}

const social = req.body.social

    Object.keys(req.body).forEach(key => {
        if (req.body[key] === '') {
          delete req.body[key];
        }
        Object.keys(social).forEach(key => {
            if (social[key] === '') {
                delete social[key];
            }
        })
        if (social.length == 0) {delete req.body.social}
    });
    try {
        const existProfile = await Profile.findOne({lawyerID : req.user._id})
        
        if (existProfile) {
            await Profile.updateOne({lawyerID : req.user._id},{...req.body})
            const updatedProfile = await Profile.find({lawyerID : req.user._id})
            
            return res.send(updatedProfile)
        }
        const newProfile = await new Profile({...req.body,lawyerID : req.user._id})
        await newProfile.save()
        res.send(newProfile)
    } catch (error) {
        res.status(400).send({ msg: error.message });
      console.log(error);
    }
}

const getMyProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({lawyerID : {_id : req.user._id}}).populate("lawyerID","-password")
        if (!profile) return res.status(400).send({msg : "you can not access this profile"})
        res.send(profile)
    } catch (error) {
        res.status(400).send({ msg: error.message });
      console.log(error);
    }
}

const getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find({}).populate("lawyerID","-password")
        res.send(profiles)
    } catch (error) {
        res.status(400).send({ msg: error.message });
      console.log(error);
    }
}

const getOneProfile = async (req,res) => {
    try {
        const profile = await Profile.find({_id : req.params.id}).populate("lawyerID","-password")
        res.send(profile)
    } catch (error) {
        res.status(400).send({ msg: error.message });
      console.log(error);
    }
}

module.exports = {getMyProfile,createProfile,getAllProfiles,getOneProfile}