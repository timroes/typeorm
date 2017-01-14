import {PrimaryGeneratedColumn, Column, Entity} from "../../../src/index";
import {Post} from "./Post";
import {ManyToMany} from "../../../src/decorator/relations/ManyToMany";

@Entity("sample5_post_category")
export class PostCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Post, post => post.categories, {
        cascadeInsert: true,
        cascadeUpdate: true
    })
    posts: Post[] = [];

}