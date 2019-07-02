var $template = document.querySelector('.template').innerHTML;
var $addForm = document.querySelector('.add-form');
var $search = document.querySelector('.search');
var $main = document.querySelector('main');

var contacts = [];
var testContacts = [
    {
        name: 'Vasyl',
        source: "data:image/png;base64,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",
        phone: '+380963204265',
        email: 'vasyl@gmail.com',
        born: '07.03.1986'  
    },
    {
        name: 'Petr',
        source: "data:image/png;base64,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",
        phone: '+380442562548',
        email: 'petr@mail.ru',
        born: '05.02.2002'  
    },
    {
        name: 'Марина автобус',
        source: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQIAAAEmCAMAAAC+rG5CAAAC91BMVEUAAAD/MjIyAAD54Mo2AAD54Mp4EBD33sg1AAAzAAAyAAD/MzMzAADt0r4zAAAyAAA1AAA6SIThzMFUJSL33sn/NTXs1sXfw68zAAAzAAAzAAApAABJGBX44MozAADy2MMzAADDo5MzAAD43sj23cfv1cEzAADjx7PIqJi6mYozAAAzAAD/NDTNvrozAABhNC/o08SFXVTl0MOLiaLPsJ8zAAA+S4WjmqimgXXJuriwjoAzAAAzAAAzAAAzAAAzAAAxAAA1AAAzAABET4czAAD128b13MdqPznv1sLavaqblaerh3ozAAAzAAAzAAAyAAAwAABRIh9NHBn/MzMoOnxSXIw1QoGUj6XTwry/n4+ooKw1AAAnOXxLVopbLyrz3MllOjV/Vk703MfpzrrdysDax7/TtaObdmrq0b65rbMzAABHFhT028Xmz77Uw73MvLkrPHzEtrfy2sdqbpX/PTx2eJl+f52UbmMzAAAzAAD/NjYzAAD70b3dyL9XKiVcZJH99+H7qJlvRD15T0fny7dOWIv+MjIzAAAyAAAzAADmzrthZ5L7oZOKY1qqoq0qL2bCtLW1qrEtJlG2lIX/NDT/NTX/MjJEExH13cnv2Ma6rrP/REL/SUbXxb2hfHDEt7deZZH+bGX+YlvRwbz/MzP/MTH/NTU6SINZYY/7sKAkMnf8mo2Dgp96eptET4dzdZj/UE2+sbT/MzP/MzP/NTX/MjLoz7xJBgb6yLb6xbL7v63/NTVvcpcvFCz8kIQtGzz/MzP+W1b/VVD/MzP/MzP/MzP6074wCRXq0r+OaF3o0bycGhr9g3r/MjI8SoT8iX39fnT+aGDKJSW5ISH/MzMzAQMxBw9kDAz3MDArOn2GFRX06NTkLS3YLi7/MzNgMi7lz7xzDw/uLy/+cmmjHh4zAAD54Mr/MzMnOXzlzbotPX8wQIA1AgI+DAs6CAcqO31DEhD43sg3RYI4BQT03MgzQ4Hq1MT52MP53Mbw2ccyAwdBDw0+AgIZkjxvAAAA5XRSTlMAmgz+CPoD9xK2Fvrx4NOnJ/3Z8fDk4NiGZlIG+vXq5+PUevLu49za1NTLX/DUxOvd3NvX1C361tXU1KGSjUo6NSH79vbs5+XY19XUvq2BQRD39vXx7d7X1tTTHPry7ero3t3d2NfW1tXUdP3U9/Pu6ejn4t/e2deblwj++/nu6OLi4uDb17RtWf3u5t/Z2NfU1NTTTS4T+uzk5NrX1tXU1NTU02w+GvXq5t7c29vZ1dXUw2UjDfv79/Tv6uDf2dnY1dSmg1f+8+ja2NfWztvY1dTU1I799+rl3tza2NZ5/OTj3dSZVR0yxQAAFbRJREFUeNrk2U2Om0AQBeASQhZYCHoJjIQQCxa25B0r/2Ajljaw5wacYCwfwPEBfYR3j0SaUZQ4ieJk6O5q5jsCetX9qiHFZnbnzEUbR9esCbfn82YbNtkQxaXoHeuFpm1mOUWcrY+5d8FveflxHUZtb9MU2U7bnBYennHL3e2ycKaUiBenbdwE/yh1s9KiKbCKzE3wnxJ3EIaHwRbZ6o4PuSzCvbFhsMVwrDAGf2PkSDiRW2E8q6GfkUlexDbFyLwg7sgUVnyqIEMeCjLBPPMhjXcW7OfByVJIVa/3rD9Cl6WQrgpKtl3BjlIocTsVxNGsXUEZL3SInT64QSU/5nYkLFOodmJ1Q/YnaOA1fB4Wdgn0cA/Egr29Q5e8JQbEERrVg/5TsU2hVzAnvb540M3fk05DBf2SHemzAQteTLq8gol6SVrM1mCjupIOARi5ZPSEqU7Bm4v6HDRgpo5JregCbpKSVNpx6AOP8gOpIxJwtHBIFWsBnoIZKcKoEDy4khpXsOXtSYVC/3L4Z4uO5LNX4GxD8mVg7R6TbEUN3tIDSXYEd65NUi3B30AyOTn4q0uSKIQJfIekEZwrwQ9e6dHUnkv/6rYjSQ6GhABYWSTHGcaISIremBAA+Zy++3TXwbuQJOhSGMQTNL4IRpEQA4v3kvyLvKOxlTDMkr75lLVI3sZombAg/eS2p3HtYJwzvZnkf+Tn+BaNyTKqFLwraEztV/LtJKaJKIwDuBEraqzalkBcal1QQFPFgrTWGFc0gEsglQKiuLQQNLYsEUxM1bBEjbEoHlASlcSDxijEu4Qj8eLRxHh+/0xKN6GQUC92phstHegMM0Xj7wYJr6/fvPne9xbIP2jb/z0fCD4nLF1D/kGrhVwrrSP/pA2LvD5QuAkff+s64SDh7EpxvYvw8lceti/jnArcz9OArD6yuHYJVxlcOEa4qcgCTXqKiCbF+XAD4aZDhSCJ3ktiTbi85ZevtOv0z/Oqt+bpde37OhRel9tJRHFkkW7YOV8rEXFSX858P6c78N07X1eXSNMRL13VVVi2765rgght/eIsEPoKEUOZladryCvM2rEdc8vOqX6icAk6Hs4uWYzrVXulWIgdufs2uQlH4l+4WHWCJO3rdixUelbZZYEGw9olAjlCkuXaCmGocp94ycKtFKoweEiSpMiBcLJzTy04P+7ZmOLrRZ3FEJa0YYFDYdeylJ4luvUSCK5YX0FYpHTjaGVSBWEJRLFd37f4IUjqpuFlFcSiancRnnYuTd3++ZUMiOhaJ8/EuGWFQHesNpP5NEggrpK9hI/NqwSqjB6RuU3kQXSSai9hI/5ScT+Z2+96iIz3yvvYhZQcJFXkIDUkz7mnxf2p2Di8uwMpc41zRjiXgt2CS8VIoXSdm3CyW/x/ylSokFpZ3KrF68JURqcJqwopUk3VQUiqNwxWbCFs+rqQeukNJHlnNop7kuQsxKLI/Z3iRcIGwmYfYvh801O0mzaLtbm/v9lim5qanvb5foGfX77pQIM2q9XaTLNabobb61KQJJ1YJeqNy4qTTEcD3bT02wuGBroHK5sMhlpqhtqmym/dA21269Q0ksa0adUGG4xtzmBgGhwa6h0e9fv9ZH6HhciGK9nK4tzAVzcOdQ/+qKXmZfg2oLUlF4Zpm3bgmyGJJj/09PSO0KHgv43Of5F0xz860ttTaaA4qa0csvgwN59lqJItouyh6B0Z9d8hCR0SZ+90pKeJ4qe22z4NdlP27lqKn6aeEdGmhOtklh5qLh6Px+EYG3N4PFQilXbWDNBfydakI9Cig2mRXS/LlCBKbdiboJOy1gKj9tnnA1Vms8kkl2vk5qoDTxvtxlvnZZNjsV3vtiGRmwOxI2BMdr61zVjTeEBdZTbJNRq5yWR+pX7TaNcaW4sSBGOEZa0oSjYcpuIUleZLwEbSolHXvJ+c0emmZszW30RFOGStNW8z08EqTaOVUXFGWRZKotwy+h73whqzMa8WdcFxRyQG1tkRMEQG1MUauRLzqiuIy4osE8MDUSYE/wdqhncmJEdSdS8chEEfYk1F0sBjtRLJqRqnZujxi3XZ5ighc+fDd5lIWpo6PHz7EcsYbk2N5MknWbNh1EGB7uCzJwOHHFxoiijGQGzV7BukGOdfgosqKmqY7Vhxoyi7Zv5oUVQDbjIng9lgCjPZaoNjoA7cFERTLFuNeHqZKIuk6LR4PAMc1YRSaLPVarHYbDaLJbAK+kQxnoGjlvH53gOyZ5k4p8rfDTwHAVBXRMXjH0+0heeD7+KFYDdJZEIr45MJGFqKzTNwpg4V3sOEza6N4mwfO0vkzPw2ngHONGNUYuN14CyTacyhnSCxvA2RClnIEDgvk4h6lDK9TgdnaRepxO6Buzomu5ZKFCSWTrlXsBDsnnl4fIOE5SJ/jA6BBNyVhtcArR+NpQVfLoZr5xq+IRh/AR2JsakYOeEXYbmAM0IJykhYNSTHeY4CHGC+8idNeqR2vsU3r6COfhBfgFxnzHuqB3AqNCkuF64uKJegeBMJKQM+Bj58MgM8k4HHhKgqD91WHbhrGQum0ZKYZFBOd6veGbpxJVx1qAOgJyFfgUZ6MPPp9otJ+i/zEfWKzq0yCbjLD/ylwwxIb5AodzUClMFfnVku2LGyswRAdngYdAQfnSMfPMjoZ56JKDMdgovgweQIRDMTuOolUZeUoHUKtEa48CgcWhUC8kiQAkw+9LziHYKXiGJm2MfgQe0JJKRs4OdvEuEqBKJ9PSTcWZI3DQGSjtBPSmTTxelT8FBEJ9KT8dmhFTQe5XYRgJ9eEnElDYxCJhlcF+7+8V0wpMHPcl8D6CmhlG8IZBmIekmH4Dx4aAvVE/ejIbghRVAWkyIfCrdxthdBWwmjEGjlOXozxuPffImMeZg80GVWGx2CaDosQ0iXW6CzlNvhHIMQHaG9Bow8C4PM2cP+Md3Udp5zop0OQTkJUUSayaFHwZ0Lwp2nlSMkrT00JTx1UJRHDs7MjllvUEFwjuDsD3Nns9NEFAVg4ziiRjRIU4zaqLFaWZCCRWqrwagRIsY/kmLVUIqIprrTFCUm1ChGE4IpcQEssAsWNgRMuucFfAQf4Jw0LS1YcGHY6NyhvbSdGWb0zs+3IxmmndN7z9+cc+7sX22YnRVEEAKR1ce0So3UnO1iV2azUvq9Hd+XyJ/Ngn33omYmBFfQhxTRx1hOoGbIQnwuiKCzqAuxxGn6HoGNe5ijNUWcfx2WXMRF1q7ERB1SsFeZ97QHtVIjKNYkCiIIA6H7KJY4x6pp9yyNjCit3XBdjHeyZ1AjxJgmJZ7lCocamSlFV2/cxW1AIfb7/E6GLSktZf0zLeENc+7R7s1IRIXz/xQnRYv7AN+MgMBLpHSss3qtevtUMQAtV/6PncglBS02hdoYoxECJShIcwG1QeL1ecSSRRixYYUqgA8sq63yDVhJKq3JO6LO8CJWwPcK0mzWnj/OHkAsukZ5F25AQ4R2pjV337ESR0C7MYumiR2rJJLWvKnOCMKMcShAYgR/WTOH6C9eYtqWk6PatizKXdCsCcb4amn2CqJ5hOrhk3QR4MMcQEvprjRIOnabbbnVOZkkdgpVM3VF7kl9WcFtntIUIVG3xL4C4TLv0tlNU+gMi+4mq5fB8ytpLVkDfkh2vXMkezbEqfYxhcuTDhRx5buncTN+2r7PtNjopcSGLAgWfVqDN5cOEL0tLc20V6UM7F8Fg1iSfcOzMlVYSvEdZN2umx+VcNMzggxUqUSe5I7bzsjZijqyRHhVdkWQQJZ62Q2tWMYXpmXYO/dDiU4eq4gIMviqwq2xkaVeGJQPesgbwqiKiDFB0o9xLFHxP6482+79g0DxS7mpbYI+uM+jMjPkFUpdUCnwI+sgMIjKnPCSO83KXxCixafMh4CvjkrtywD55kFOyYiLL49jdmVTT/TB8pCSfq1JkYtiCtc8ofVmOnRtj1yVWuJesoTHfDaUpC+xmCHP1uVAZfrmxZeE0aDMlVMJcTFFeJTl2iqtr9Cjd/+d5GdPi1+9MBS3c1iGw556UVgmAggE1fhOAXJxps3js1d8FG+PvCCyzg49R3lqj0CRYX1GW32R0dHz4vv2bNuY537E5/Ml4qmJrsXeQjZNyMSaeFSDI0JK08itktG7nxJNvkQqMtG1EKgTb9V2V9EP6RipbEphX4jtl/P84mO0urC8UjRTFx3kUC01TdE6IoXqWy3/isVtyrqyEyjtep0Y14hyTDd1xQrZzObHz2QLAe+g1tRoh8/TW/iVKSvCzRZi3mAfKnO1rG/nkm7Ho/g5JfPf/Mg3sfitZ27uR8/7rvhM8xT+G31/7+N53/Njbq7n20Kk6YDdhlty1A0UmjvVoS+lxYnKrIn8/on/x9rvNRFUxUC93HR49h27IRdaD9u5nF4zznbthSry/QNoLbjWeuXiW/ZzjXL9rUc5tAg1A59DSzpOgz58A6TJuy0ig4ZnqyDBRQMmn+YtshuegBSX92wz4Oy8z2gF+Du6T4b/CHKE0Qq48rqfmHIL5MidRAtwHSTZf9iQAbjH0QKE5HsUDRh19w7NpzYPkjw15piUFSeaTiNIQcqMGPpGlmvg30xYz0EmNGMgyziazckcSEMPzWGSR5flyAk0mUbZ2QUGDcZfeowm06k84MyAoY/9yAT2+2DfdqOOjVrpQFO5Z8xxeocALOsddRpzalA7KBDm0ERceZDhBhGBvkECLfg0kX6Q4zwNEXSfhOzm0TQG8iDHK5I5ZJpAtaSHOA6yXGAqgkugSIhHE6CaQN9AkYrAikbB4QariGDSpMyJHywjAnjLownUrht3ruYD2MBSedQTYVDiplGrgLYxGg3fD5YSAUzWomHQpCkDXcDwALFug1XiaWAgAsbnZNQbKAPaq26Ua9QOKnhdb+BeaIQtGSYiMPjsqCMuNAbuOmzNKxomGXiSXs6YaME5DirYzzRYfgoqWXpiQDZ1dATUsJtl1mjnTVCNewB15ngOyjAkcbZjGNSzfo9DHXH+Ye5+WpsIwjCAQ9Z0VYwVUox/IhqNrTGgBBQKUatikhWrGG9FEI2gATfnCIIHLVgCPXkQL/0Y8SvEfgm9PC8sZEOWeqsHixYWocWdeR9Lfude+szb7szsOzsVJHSYeet66j5MPKvLfzP3FmDdEsK/RC32qJCW/6LeHSGxO8wI9p+Bocay8KULeRigvlA7eBumRi9rQjb3FAbIr1UXYOFRwRWi090RDJWJEZRhJcsL4fTLTRjgXzh+DFCEwAgghAn+OmlfFdayF9y9D4A/Q354CQrZjzVRWF4dwdLFh7wHwhmovFo7L3bSLxqwEF8fxnLkDZTC1blITEW1j1moXCXuFujle+2WSQqR660vQYF78/4D6I2DIEicQvTDa3eCoASls7QHwjQ04giSpeC4XrsXbNFHUJ1irRAOQyWOYDsFz901hqjorXeCbaUhFJg379+6DY04gth6+3O0059/+3sQU0TAvnn/BgjiCOJimIkc2eZErfZ6P/jb0hBKC7SOO4JXwQ6+t9stN4rcrV+/F8R4EXwgnkziRxDrBLsoqCN4TZoez4IgfzQTGCBFsLiP1GdEMGy20n4nMNDx/CuKCKgndj+AoVkXcVp+ph8kMPD8uiPyQhEBc4o8VQXDt6L8lq77vrdrOfT7A89vnZM/cvoIypwPOHAiOCUSc+utrSS8zGDQ63T6/d4g43m+77fqf/1UbgNa1yZmYgRkxdzcCAq8PuQVUDwRc88VETBPa14DxTsxlwmhdoTwr2ARFBUxd5oQwQnCptkhUHTFXG0Tag8mZI20ZV7MzYyhNj01ETtGtq2ZaUIEF1OTsUaybdRuQoG1ZZCaBcXGFbHQgN5Nfc8lxygnFlahd3xCJkbYzIiFeSiwelCvg2NcEwtLUGA9EhbBkXfEmGK1TNw12TcLjobYWB5B7XBK3WHD0RXZwxkyc+NoASQlseE0ofdY22GjoT+zsgq9BW2HjQLhOw8F6K1Mwr4h0BU7M02oHddFcB8U4+diqQAFRgQnD4CiILZONaBV1n7JhmA474i1oiIDSgSL0Pt0RTSKlRAqK9oOdKXwSakuSrmv+RHs3dBVwSUobIzfl547QuDm7l0Oh7BzS/dEOABbYfbli6IQnb9QMSgG3gR5Gkbi4V9SDD+3GC6l9nx2GGbX7iqGn14M01OsNULi4c84osAvhrPqs8rJhW/X7s6IAq8YmNunqTMJh//Vs0JGDLCKAf8yq36PcD/J8D+Zv3tOKPjFUNUfVk4w/OeFhl8MZcJb1ckc/gTFQDuSUMVOhhs/v1R+lXP/rIkEYRjAJwjXDFdue/UV215/xfVXbHlfY5uIjY0QsNzYaKOoIDaiBmMEUaM2KokaSAhJIMndPLWk2C1SXPQu5yH+WXdn1pX5fYN5eOd9XwfZz774BvL6MXFI3Pt+tHD418pjb3x/d6NUmd98vB+Nx73e7eN15fXl19TRV66fPZ0e/7o3etLwR9xk/jJp4h/16X58W3nl89fLL9/+Nr7K7egG/0tZzFf6WHQTKWUJB4fTACq9Ow2LLpifhDUsQYsPZeLWj08v16MaltByzD+qClagkc4JcSX4845iOd0/LdFMYI1GO0acM4pYLRFi/hBIYT3lwWklZIpYq+WTsZDERkqJOJA9xybJCfOBS9hRPN66CZQUbHbJdq9OYYvW3u42lCOwg+bZrkUp7BpsUwiGAnvUMNutsAb7agaxq02B/cggrGIb9IHYchIBsB8ZRDVs6dzOg2p2AOxJBnkNEJDBcQPYkwzqFA5EgpsSULA1Lcp24YICzjLgngBA+8xzVhJOHaxdBxpwZmgxb4UKcC5NVoo14FQhxLx0psMFzVj5TlaEc/oZ8060BleUMlnuAG4onjVFq0+xgNNoTMMdmjSZF04LcK9DlshocCvuwWUI5BVwoGSXrMUDuKfWJ0ysUAoL+E3GK3DRFDsZcjo4ocdkQYaCDyVvMVFCQwpuIouPRANwUxDUEcy6Ap4yi9OAI+1ZwG0I5OKYElUGsfd8fXsbTlMUcwK6wRV4S4QtngEkVfB3RebKKvhLRE1fBwDUsoKKYC6e5xBCoDpUIUhJWCeY0+vdAHPDzKVUCDNviCWIU0vlHJfCJNSPQyQ19r4TFCGU/ly1HBVAU4VgnffFEKLRxEV1q1qwutGUDsHmPxQ+HMAL+jAasmwd3zy9aKnwxCBIpmI1eERLJOtnXTOw5vSh8GVLp/AKzZIpA55S46nLfO60a5qWZU0mk8DEskzT7J5F+8np6b1lzJ/LPKcp8USh0Go2m61CIq4rFDvRnj2VNCCxc/LmGDIrTvthGzJT3iIIRiAzGpv9PpBamZAy5JYhpAO5GbJ3Q6BEgueQW1ryxWgWQUyF3NIkC8mlJV+PZxFkILmO9GsBDFKC5DLEOJBc9jeHZOqBQv/gpgAAAABJRU5ErkJggg==",
        phone: '+380663212022',
        email: 'marina@ukr.net',
        born: '25.09.1992'  
    },
    {
        name: 'Паша2',
        source: "data:image/png;base64,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",
        phone: '+380965254845',
        phone: '+380763212022',
        email: 'pasha@ukr.net',
        born: '25.12.1992'  
    },
    {
        name: 'Ник',
        source: "data:image/png;base64,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",        phone: '+380965254845',
        email: 'niko@gmail.com',
        phone: '+398546523652',
        born: '25.12.1992'  
    }
];
if (localStorage.file === "[]") {
    localStorage.removeItem('file')
}
if (localStorage.file) {
    contacts = JSON.parse(localStorage.file);   
} else {
    testContacts.forEach(item => {
        contacts.push(item);
    });
    contacts.sort(compare);
    save();
}
contacts.forEach(item => {
    render(item);
})

document.querySelector('.contacts')
    .addEventListener('click', function(e) {
        var $el = e.target;
        var $elParent = $el.closest('.contact');
        var $elParentDescr = $el.closest('.contact-description');

        if ($el.classList.contains('contact-name')) {
            if (!$addForm.classList.contains('hidden')) {
                $addForm.classList.add('hidden')
            }
            if ($elParent.querySelector('.flaticon-cancel')) {
                $elParent.remove();
                contacts.splice(contacts.findIndex(function (item) {
                    return item.name === $elParent.querySelector('.contact-name').textContent;
                }), 1);
                save();
            } else {
                document.querySelectorAll('.contact-description')
                    .forEach( item => item.classList.add('hidden'));
                $elParent.querySelector('.contact-description').classList.toggle('hidden');
            }
        }
        if ($el.classList.contains('flaticon-edit-1')) {
            var $editName = document.querySelector('.add-name');
            var $editPhone = document.querySelector('.add-phone-input');
            var $editEmail = document.querySelector('.add-email');
            var $editBirthday = document.querySelector('.add-birthday');
            var $editSubmit = document.querySelector('.add-submit');

            var $name = $elParentDescr.querySelector('.name');
            var $phone = $elParentDescr.querySelector('.phone');
            var $email = $elParentDescr.querySelector('.email');
            var $born = $elParentDescr.querySelector('.born');
           
            $editName.value = $name.textContent;
            $editPhone.value = $phone.textContent;
            $editEmail.value = $email.textContent;
            $editBirthday.value = $born.textContent;
            $editSubmit.value = 'Сохранить'

            removeEditableClass();
            $addForm.classList.remove('hidden');
            $elParent.querySelector('.contact-description').classList.toggle('hidden');
            $elParent.classList.toggle('editable');
        }
    });

document.querySelector('.add-contact')
    .addEventListener('click', function() {
        document.querySelector('.add-name').value = '';
        document.querySelector('.add-phone-input').value = '';
        document.querySelector('.add-email').value = '';
        document.querySelector('.add-birthday').value = '';

        removeEditableClass();
        removeFlaticonCancel();

        document.querySelectorAll('.contact-description').forEach( item => item.classList.add('hidden'));
        $addForm.classList.toggle('hidden');
    });

document.querySelector('.add-phone_btn') 
    .addEventListener('click', function() {
        var $addPhoneBlock = document.querySelector('.add-phone');
        var $inputPhone = document.createElement('input');

        $inputPhone.classList.add('add-input', 'add-phone-input' )
        $inputPhone.setAttribute('type', 'text');
        $inputPhone.setAttribute('placeholder', 'Номер телефона');
        $addPhoneBlock.appendChild($inputPhone);  
});

document.querySelector('.flaticon-cancel')
    .addEventListener('click', function() {
        $addForm.classList.toggle('hidden');
        removeEditableClass();
    });

document.querySelector('.add-submit')
    .addEventListener('click', function() {
        var $addName = document.querySelector('.add-name');
        var $addPhones = document.querySelectorAll('.add-phone-input');
        var $addEmail = document.querySelector('.add-email');
        var $addBirthday = document.querySelector('.add-birthday');
        var $editable = document.querySelector('.editable');
        var $file = document.querySelector('.add-avatar').files[0];
        var phonesList = [];
        var reader  = new FileReader();
        
        if ($editable) {
            $editable.remove();
            contacts.splice(contacts.findIndex(function (item) {
                return item.name === $editable.querySelector('.contact-name').textContent;
            }), 1);
        }
        
        $addPhones.forEach( item => {
            if (item.value === '') {
                return;
            } else {
                phonesList.push(item.value);
            }
        });

        var item = {
            name: $addName.value ? $addName.value : $addPhones[0].value,
            phone: phonesList,
            email: $addEmail.value,
            born: $addBirthday.value
        }
                
        if ($file) {
            reader.readAsDataURL($file);
            setTimeout(function(){
                item.source = reader.result;
                
                contacts.push(item);
                contacts.sort(compare);
                
                save();
                render(item); 
                return contacts;
            }, 1000)
        } else {
            item.source = "";
            contacts.push(item);
            contacts.sort(compare);
            render(item); 
        }

        $addName.value = '';
        $addPhones.forEach(item => item.value = '');
        $addEmail.value = '';
        $addBirthday.value = '';

        document.querySelectorAll('.contact-description')
            .forEach( item => item.classList.add('hidden'));
        
        removeFlaticonCancel();
        $addForm.classList.add('hidden');
        
        save();
    })

document.querySelector('.flaticon-garbage')
    .addEventListener('click', function() {
        var $contacts = document.querySelectorAll('.contact-name');
        $contacts.forEach( item => item.classList.toggle('flaticon-cancel'))  
    });

document.querySelector('.flaticon-search')
    .addEventListener('click', function() {
        $search.classList.toggle('hidden');
        $search.focus();
    })    

document.querySelector('.search')
    .addEventListener('keyup', function() {
        var $contact = document.querySelectorAll('.contact');
        var $result = $search.value.toLowerCase();

        $contact.forEach(function(item) {
            if (!item.textContent.toLowerCase().includes($result)) {
                item.classList.add('hidden')
            }
            else {
                item.classList.remove('hidden');
            }
        })
    })

function removeFlaticonCancel() {
    $main.querySelectorAll('.flaticon-cancel')
        .forEach(item => {
            item.classList.remove('flaticon-cancel')
        })
}

function removeEditableClass() {
    var editable = document.querySelectorAll('.editable');

    editable.forEach( item => {
        item.classList.remove('editable');
    })
}
function render(item) {

    Mustache.parse($template);
    
    var rendered = Mustache.render($template, {
        name: item.name,
        source: item.source,
        phone: item.phone,
        email: item.email,
        born: item.born
    });
    document.querySelector('.contacts__list').innerHTML += rendered;
};

function save() {
    localStorage.file = JSON.stringify(contacts);
}

function compare( a, b ) {
    if ( a.name < b.name ){
        return -1;
    }
    if ( a.name > b.name ){
        return 1;
    }
    return 0;
}

