import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getAll = async(req, res) =>{
    try{
        const {data: users} = await axios.get(
            `${process.env.API_URL}`
        );
        if(users.length === 0){
            res.send({
                messenger: "Danh Sách người dùng trống",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }
};

export const getDetail = async (req, res ) =>{
    try{
        const {data: user} = await axios.get(
            `${process.env.API_URL}/${req.params.id}`
        );
        if(!user){
            res.send({
                messenger: "Người dùng không tồn tại",
            });
        }
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).send({
            messenger:error,
        });
    }

};

export const create = async (req, res) => {
    try {
      const { data: user } = await axios.post(
        `${process.env.API_URL}`,{
            name:req.body.name,
            username:req.body.username,
            email:req.body.email,
            phone:req.body.phone
        }
       
      );
      if (!user) {
        res.send({
          messenger: "Thêm người dùng thất bại",
        });
      }
      return res.status(200).json(user);
    } catch (error) {
      res.status(500).send({
        messenger: error,
      });
    }
  };

export const update = async (req, res) =>{
    try{
        const {data: user} = await axios.put(
            `${process.env.API_URL}/${req.params.id}`,
            {
                name:req.body.name,
                username:req.body.username,
                email:req.body.email,
                phone:req.body.phone
            }
        );
        if(!user) {
            res.send({
                messenger: "Cập nhật người dùng thất bại",
            });
        }
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).send({
            messenger: error,
        });
    }
};




export const remove = async (req, res) =>{
    try{
        await axios.delete(`${process.env.API_URL}/${req.params.id}`);
        return res.send({
            messenger: "Đã xóa user thành công",
        });
    } catch (error) {
        res.send({
            messenger: error,
        });
    }
};
