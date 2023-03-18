Public Class Form3


    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click

        Form2.Show()
        Me.Close()

    End Sub

    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click

        Form1.Show()
        Me.Close()

    End Sub

    Private Sub Form3_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

        If (Form1.sus = 1) Then
            PictureBox3.Visible = True
        End If

        If (Form1.books = 1) Then
            PictureBox8.Visible = True
        End If

        If (Form1.drone = 1) Then
            PictureBox5.Visible = True
        End If

        If (Form1.bob = 1) Then
            PictureBox1.Visible = True
        End If

        If (Form1.laptop = 1) Then
            PictureBox2.Visible = True
        End If

        If (Form1.elpro = 1) Then
            PictureBox6.Visible = True
        End If

    End Sub
End Class