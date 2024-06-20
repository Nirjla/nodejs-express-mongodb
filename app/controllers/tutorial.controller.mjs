import Tutorial from "../models/tutorial.model.mjs";

export const create = async (req, res) => {
      try {
            const { title, description, published } = req.body;
            if (!title || !description) {
                  res.status(400).json({ message: "Content should not be empty" })
            }
            const tutorial = new Tutorial({
                  title, description, published: published ? published : false
            })

            const data = await tutorial.save();
            res.status(201).json(data)
      }
      catch (error) {
            res.status(500).json({
                  message: error.message
            })
      }
}


export const findAll = async (req, res) => {
      console.log(req.query)
      const title = req.query.title;
      const condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
      try {
            const tutorials = await Tutorial.find(condition)
            if (tutorials.length > 0) {
                  res.status(200).send(tutorials);
                } else {
                  res.status(404).json({ message: "No tutorials found" });
                }
      }
      catch (error) {
            res.status(500).json({
                  message: error.message
            })
      }
}

export const findOne = async(req, res)=>{
      const id = req.params.id;
      try {
            const tutorial  =  await Tutorial.findById(id)
            if(!tutorial){
                  res.status(404).send({message:"Not found"})
            }
            res.status(200).send(Tutorial)
      }catch(error){
            res.status(500).json({
                  message: error.message
            })
      }

}