'use strict'
const Db_tareas=require('../model/tareas_model');

exports.render_tareas = async(req,res)=>{

    let datos= await find_tareas({});

    res.render(
        'tareas.ejs',
        {
            arr:datos
        }
    )
}

exports.add_tareas = async(req,res)=>{
const {title, description,status}=req.body
    const misdatos={
        title: title,
        description:description,
        status:status
    }
    let respond= await create_tareas(misdatos);
    console.log(respond)
    res.redirect('/tareas')
    
}
async function create_tareas(datos) {  //
    return await Db_tareas.create(datos)
  }
  
  async function find_tareas(params) {  //
    return await Db_tareas.find(params)
  }
exports.get_tareas = async (req, res) => {
    let respond = await find_tareas({});
    return res.send(respond)
  }
  
  exports.ejs_tareas = (req, res) => {
    add_tareas
  }