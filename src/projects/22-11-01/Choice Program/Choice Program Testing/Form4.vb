'Muhammed Oruc
'Computer Science - Period 7
'1/14/2022
'Choice Program

Public Class Form4
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Form3.Show()
        Me.Close()
    End Sub

    'FORM 4


    Private Sub PictureBox1_Click(sender As Object, e As EventArgs) Handles PictureBox1.Click

        Form1.peel = True
        PictureBox1.Visible = False
        PictureBox2.Visible = True

    End Sub

    Private Sub PictureBox2_Click(sender As Object, e As EventArgs) Handles PictureBox2.Click

        Form1.eat = True
        PictureBox2.Visible = False
        Label1.Visible = False

    End Sub

    Private Sub Form4_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        If (Form1.peel = True) Then

            PictureBox1.Visible = False
            PictureBox2.Visible = True

        End If

    End Sub
End Class