<?php
namespace App\Ui\Tables;

use Macrame\Ui\Table\Table;
use Macrame\Ui\Table\Schema;
use Macrame\Form\Fields\Input;
use Macrame\Form\Fields\Checkboxes;
use Macrame\Ui\Table\FilterCollection;
use Illuminate\Database\Eloquent\Builder;

class PostTable extends Table
{
    /**
     * Edit table schema.
     *
     * @param  Schema $table
     * @throws Foo
     * @return void
     */
    public function schema(Schema $table)
    {
        $table->col()->label('Title')->value('title');
        $table->col()->label('Text')->value('text');
    }

    // /**
    //  * Add filters.
    //  *
    //  * @param FilterCollection $filters
    //  * @return void
    //  */
    // public function filters($filters)
    // {
    //     $filters->add('lorem', [
    //         new Checkboxes('foo', [
    //             'orange' => 'Orange',
    //             'apple' => 'Apple',
    //         ])
    //         // new Input('foo')
    //     ]);
    // }

    /**
     * Handle search.
     *
     * @param Builder $query
     * @param string $search
     * @return void
     */
    public function search(Builder $query, $search)
    {
        $query->where(function ($query) use ($search) {
            $query
                ->where('title', 'LIKE', "%{$search}%")
                ->orWhere('text', 'LIKE', "%{$search}%");
        });
    }
}
