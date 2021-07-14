const animeListModel = require('../models/animeList')

export default async function addAnime(req,res){
    const { title, description, imageUrl } = req.body
    try {
        const newAnime = new animeListModel({title: title, description: description, imageUrl: imageUrl})
        let newAnimeInstance = await newAnime.save()
        return newAnimeInstance._id
    } catch (error) {
        console.log(error)
    }
}

export default async function addAnimeVideo(req,res){
    const {id, videoUrl, thumbnailLink} = req.body
    try {
        const newAnime = await animeListModel.findById(id)
        newAnime.video.push({videoUrl: videoUrl, thumbnailLink: thumbnailLink})
        const updated = newAnime.save()
        return updated._id
    } catch (error) {
        console.log(error)
    }

}

export default async function getAllAnime(req,res){
    try {
        const animeList = await animeListModel.find()
        return animeList
    } catch (error) {
        console.log(error)
    }
}

export default async function getAnimeVideo(req,res){
    const {title, episodeNo} = req.body
    try {
        const animeList = await animeListModel.find({title: title})
        const videoUrl = animeList.video[episodeNo-1]
        return videoUrl
        
    } catch (error) {
        console.log(error)
    }
}