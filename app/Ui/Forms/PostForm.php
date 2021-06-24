<?php
namespace App\Ui\Forms;

use App\Models\Post;
use Macrame\Form\Form;
use Macrame\Form\Schema;
use Macrame\Form\Fields\Input;
use Macrame\Form\Fields\Select;

class PostForm extends Form
{
    /**
     * The form model.
     *
     * @var Post
     */
    protected $model = Post::class;
    
    /**
     * Build the form schema.
     *
     * @param  Schema $form
     * @param  Post   $post
     * @return void
     */
    public function schema(Schema $form)
    {
        $form->fields([
            (new Input('title'))->title('Foo'),
            (new Select('title', [
                'orange' => 'Orange',
                'apple' => 'Apple',
            ]))->title('Fruit'),
        ]);
    }
}
