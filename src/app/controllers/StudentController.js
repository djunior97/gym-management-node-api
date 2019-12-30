// import * as Yup from 'yup';

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const studentExists = await Student.findOne({
      where: { email: req.body.email },
    });

    // if (studentExists) {
    //   return res.status(400).json({ error: 'Student already exists' });
    // }

    // if (studentExists) {
    //   return res.status(400).json({ error: 'Student already exists' });
    // }

    // const student = await Student.create(req.body);

    return res.json(studentExists);
  }
}

export default new StudentController();
