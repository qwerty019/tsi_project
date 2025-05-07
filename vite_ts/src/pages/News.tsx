import React, { PureComponent } from 'react';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { Input } from '../components/Input';
import { Text } from '../components/Text';

interface NewsProps {}
interface NewsState {}

class News extends PureComponent<NewsProps, NewsState> {
  render() {
    return (
      <Container>
        <div className="flex gap-4 mb-6">
          <Button color="primary" size="large" title="Подтвердить"/>
          <Button color="secondary" size="large" title="Удалить"/>
        </div> 
        <div className="flex gap-6 mb-6 flex-wrap">
          <Input color='primary' size='large' title='Аниме'/>
          <Input color='secondary' size='large' title='Новости'/>
          <Input color='third' size='large' title=''/>
          <Input color='fourth' size='large' title=''/>
        </div> 
        <div className="mb-6">
          <Text 
            color="primary" 
            size="large" 
            title="Второй сезон аниме 'Поднятие уровня в одиночку'(Solo Leveling) пользуется высокой 
            популярностью среди любителей аниме, но мало кто мог подумать, что данный тайтл 
            побьет рекорд сервиса Crunchyroll."
          />
        </div>
      </Container>
    );
  }
}

export default News;