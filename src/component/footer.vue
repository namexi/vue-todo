<style lang="scss" scoped>
    .footer {
        line-height:.4rem;
        color: #777;
        margin: 0 auto;
        background: #fff;
        padding: .2rem .3rem;
        display: flex;
        position: relative;
        box-sizing: content-box;
        span {
            strong{
               font-weight:300;
        }
        }
        ul {
            position: absolute;
            margin: 0;
            padding: 0;
            right: 0;
            left: 0;
            text-align: center;
             li {
                display: inline;
                margin: 0 .03rem;
                a {
                    background: none;
                    padding: .06rem .14rem;
                    color: #777;
                }
                .active {
                    border: 1px solid rgba(175, 47, 47, 0.2);
                    border-radius:2px;
                }
            }
        }
        button {
            position: absolute;
            right: .2rem;
        }
        &:before {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            height: 50px;
            overflow: hidden;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
        }
    }
</style>

<template>
    <div class="footer">
        <span>
            <strong>0</strong>
            items left
         </span>
        <ul>
            <li><a href="#" class ="active">All</a></li>
            <li><a href="#">Active</a></li>
            <li><a href="#">Completed</a></li>
        </ul>
        <button>Clear completed</button>
    </div>
</template>

<script>
export default {
    name: 'JtodoFooter'
}
</script>
