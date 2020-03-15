import * as Yup from 'yup';

const MatchAddSchema = Yup.object().shape({
  results: Yup.array()
    .of(
      Yup.object().shape({
        player_id: Yup.number()
          .moreThan(0, 'Required'),
        winner: Yup.boolean('Required')
      })
    )
    .required('Required')
    .min(2, 'You need at least 2 to party'),
  game_id: Yup.number()
    .moreThan(0, 'Required')
    .required('Required')
});

export default MatchAddSchema;
